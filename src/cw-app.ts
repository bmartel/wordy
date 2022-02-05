import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import {
  controlKeyMap,
  initializeGuesses,
  Guess,
  LetterKey,
  letterKeyMap,
  GuessResult,
} from "./utils";
import "./cw-board.ts";
import "./cw-keyboard.ts";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("cw-app")
export class CwApp extends LitElement {
  @state()
  guess: number = 0;
  @state()
  guesses: Guess[] = initializeGuesses;
  @state()
  targetWord: string = "pleat";

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
    this.guesses[this.guess].letters = value;
  }

  get activeResult(): GuessResult[] {
    return this.guesses[this.guess].result;
  }

  private removeLetter() {
    if (this.activeGuess.length > 0) {
      this.activeGuess = this.activeGuess.slice(0, -1);
    }
  }

  private insertLetter(key: LetterKey) {
    if (this.activeGuess.length < 5) {
      this.activeGuess += key;
    }
  }

  private attemptGuess() {
    if (this.activeGuess.length < 5) {
      // error
    } else {
      // update result
      const word = this.targetWord;

      for (let c = 0; c < word.length; c++) {
        const char = word.charAt(c);
        const w = word.indexOf(char);
        this.activeResult[c] =
          w === c ? "correct" : w > -1 ? "present" : "absent";
      }
    }
  }

  private _handleKeydown(e: KeyboardEvent) {
    if (this.guesses.length >= 6) return;
    if (e.key in controlKeyMap) {
      switch (e.key) {
        case "Backspace":
          return this.removeLetter();
        case "Enter":
          return this.attemptGuess();
        default:
          if (e.key in letterKeyMap) {
            return this.insertLetter(e.key as LetterKey);
          }
      }
    }
  }

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
      <cw-board .guesses=${this.guesses} .guess=${this.activeGuess}></cw-board>
      <cw-keyboard></cw-keyboard>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-app": CwApp;
  }
}
