import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import {
  initializeGuesses,
  Guess,
  LetterKey,
  letterKeyMap,
  GuessResult,
  WORD_SIZE,
  GameStatus,
  INVALID_ANIMATION_DURATION,
} from "./utils";
import "./cw-board.ts";
import "./cw-keyboard.ts";

@customElement("cw-app")
export class CwApp extends LitElement {
  @state()
  guess: number = 0;
  @state()
  guesses: Guess[] = initializeGuesses;
  @state()
  targetWord: string = "pleat";
  @state()
  status: GameStatus = "idle";

  _clearStatus: any = null;

  static styles = css`
    :host {
      width: 100%;
      max-width: var(--cw-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
  `;

  get activeGuess(): string {
    return this.guesses[this.guess].letters;
  }
  set activeGuess(value) {
    const guess = this.guesses[this.guess];

    guess.letters = value;

    this.guesses = this.guesses.map((g, i) => {
      if (i === this.guess) {
        return guess;
      }
      return g;
    });
  }

  get activeResult(): GuessResult[] {
    return this.guesses[this.guess].result;
  }
  set activeResult(value) {
    const guess = this.guesses[this.guess];

    guess.result = value as any;

    this.guesses = this.guesses.map((g, i) => {
      if (i === this.guess) {
        return guess;
      }
      return g;
    });
  }

  private removeLetter() {
    if (this.activeGuess.length > 0) {
      this.activeGuess = this.activeGuess.slice(0, -1);
    }
  }

  private insertLetter(key: LetterKey) {
    if (this.activeGuess.length < WORD_SIZE && key in letterKeyMap) {
      this.activeGuess += key;
    }
  }

  private attemptGuess() {
    if (this._clearStatus) clearTimeout(this._clearStatus);

    const guess = this.activeGuess;
    if (guess.length < WORD_SIZE) {
      // error not enough chars
      this.status = "invalid";
      this._clearStatus = setTimeout(() => {
        this.status = "idle";
      }, INVALID_ANIMATION_DURATION);
    } else {
      // evaluate and update result
      const word = this.targetWord;
      const result = this.activeResult;

      this.status = "reveal";

      for (let c = 0; c < word.length; c++) {
        const char = word.charAt(c);
        const w = guess.indexOf(char);
        result[c] = w === c ? "correct" : w > -1 ? "present" : "absent";
      }

      this.activeResult = result;

      // Update game status
      this._clearStatus = setTimeout(() => {
        if (this.activeResult.some((r) => r !== "correct")) {
          // not a win condition
          if (this.guess < 5) {
            // next row
            this.guess++;
            this.status = "idle";
          } else {
            // game over
            this.status = "lose";
          }
        } else {
          this.status = "win";
          // win condition
        }
      }, 5 * 500);
    }
  }

  _handleKeydown = (e: KeyboardEvent) => {
    if (this.status !== "idle") return;

    switch (e.key) {
      case "Backspace":
        return this.removeLetter();
      case "Enter":
        return this.attemptGuess();
      default:
        return this.insertLetter(e.key as LetterKey);
    }
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this._handleKeydown);
  }

  disconnectedCallback() {
    window.removeEventListener("keydown", this._handleKeydown);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <cw-board
        .guesses=${this.guesses}
        .guess=${this.guess}
        .status=${this.status}
      ></cw-board>
      <cw-keyboard></cw-keyboard>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-app": CwApp;
  }
}
