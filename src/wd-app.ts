import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import {
  gameInfo,
  Guess,
  LetterKey,
  letterKeyMap,
  GuessResult,
  WORD_SIZE,
  GameStatus,
  INVALID_ANIMATION_DURATION,
  LetterKeyResultMap,
  ValidationResult,
  ValidationReason,
  initializeGuesses,
} from "./utils";
import "./wd-header.ts";
import "./wd-board.ts";
import "./wd-keyboard.ts";
import "./wd-help.ts";
import "./wd-settings.ts";
import "./wd-stats.ts";
import "./wd-page.ts";
import "./wd-modal.ts";

@customElement("wd-app")
export class CwApp extends LitElement {
  @state()
  guess: number = 0;
  @state()
  guesses: Guess[] = initializeGuesses;
  @state()
  letters: LetterKeyResultMap = letterKeyMap as LetterKeyResultMap;
  @state()
  targetWord: string = "";
  @state()
  status: GameStatus = "idle";
  @state()
  page: string = "";
  @state()
  modal: string = "";
  @state()
  closingPage = false;
  @state()
  closingModal = false;

  _clearTimeout: any = null;

  static styles = css`
    :host {
      width: 100%;
      max-width: var(--wd-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
  `;

  private handleModal(e: CustomEvent) {
    const { open = false, content = "" } = e.detail;
    if (open) {
      this.modal = content;
    } else {
      this.closingModal = true;
      setTimeout(() => {
        this.modal = "";
        this.closingModal = false;
      }, 200);
    }
  }

  private handlePage(e: CustomEvent) {
    const { open = false, content = "" } = e.detail;
    if (open) {
      this.page = content;
    } else {
      this.closingPage = true;
      setTimeout(() => {
        this.page = "";
        this.closingPage = false;
      }, 150);
    }
  }

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

  // Game conditions
  private win() {
    this.status = "win";
  }
  private lose() {
    this.status = "lose";
  }
  private nextRow() {
    this.guess++;
    this.status = "idle";
  }

  private invalidGuess(_guess: string, reason: ValidationReason) {
    this.status = "invalid";
    // Check and handle various reasons here
    switch (reason) {
      case ValidationReason.INVALID_CHAR_LEN:
      case ValidationReason.INVALID_WORD:
      default:
        break;
    }
    this._clearTimeout = setTimeout(() => {
      this.status = "idle";
    }, INVALID_ANIMATION_DURATION);
  }

  private validate(guess: string): ValidationResult {
    if (guess.length < WORD_SIZE) {
      return {
        success: false,
        reason: ValidationReason.INVALID_CHAR_LEN,
      };
    }
    // if (validWords.indexOf(guess)) {
    //   return {
    //     success: false,
    //     reason: ValidationReason.INVALID_WORD,
    //   };
    // }
    return { success: true };
  }

  private updateKeyboard() {
    const guess = this.activeGuess;
    const result = this.activeResult;

    const letters: LetterKeyResultMap = {} as LetterKeyResultMap;

    for (let r = 0; r < result.length; r++) {
      letters[guess.charAt(r) as LetterKey] = result[r];
    }
    this.letters = { ...this.letters, ...letters };
  }

  private determineResults(guess: string) {
    const word = this.targetWord;
    const result = this.activeResult;

    // Allow the row cells to animate
    this.status = "reveal";

    // Determine results
    for (let c = 0; c < guess.length; c++) {
      const char = guess.charAt(c);
      const w = word.indexOf(char);
      result[c] = w === c ? "correct" : w > -1 ? "present" : "absent";
    }

    // Set the results so it will be displayed correctly
    this.activeResult = result;
  }

  private updateGameStatus() {
    this._clearTimeout = setTimeout(() => {
      this.updateKeyboard();
      if (this.activeResult.some((r) => r !== "correct")) {
        // not a win condition
        if (this.guess < 5) {
          this.nextRow();
        } else {
          this.lose();
        }
      } else {
        this.win();
      }
    }, 5 * 500);
  }

  private attemptGuess() {
    if (this._clearTimeout) clearTimeout(this._clearTimeout);

    const guess = this.activeGuess;
    const result = this.validate(guess);
    if (result.success) {
      this.determineResults(guess);
      this.updateGameStatus();
    } else {
      this.invalidGuess(guess, result.reason!);
    }
  }

  _handleKeydown = (e: KeyboardEvent) => {
    if (e.isComposing || e.ctrlKey || e.altKey || this.status !== "idle")
      return;

    switch (e.key) {
      case "Escape":
        this.page = "";
        this.modal = "";
        return;
      case "Backspace":
        return this.removeLetter();
      case "Enter":
        return this.attemptGuess();
      default:
        return this.insertLetter(e.key.toLowerCase() as LetterKey);
    }
  };

  async connectedCallback() {
    super.connectedCallback();
    const { active, modal } = await gameInfo;
    this.guess = active.guess;
    this.guesses = active.guesses;
    this.targetWord = active.solution;
    this.status = active.status;
    this.letters = active.letters;
    this.modal = modal;
    window.addEventListener("keydown", this._handleKeydown);
  }

  disconnectedCallback() {
    window.removeEventListener("keydown", this._handleKeydown);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <wd-header
        @wd-modal=${this.handleModal}
        @wd-page=${this.handlePage}
      ></wd-header>
      <wd-board
        .guesses=${this.guesses}
        .guess=${this.guess}
        .status=${this.status}
      ></wd-board>
      <wd-keyboard .letters=${this.letters}></wd-keyboard>
      <wd-page
        .open=${this.page !== ""}
        .closing=${this.closingPage}
        @wd-page=${this.handlePage}
      >
        ${this.page === "help"
          ? html`<span>How To Play</span>
              <wd-help page slot="content"></wd-help>`
          : null}
        ${this.page === "settings"
          ? html`<span>Settings</span>
              <wd-settings page slot="content"></wd-settings>`
          : null}
      </wd-page>
      <wd-modal
        .open=${this.modal !== ""}
        .closing=${this.closingModal}
        @wd-modal=${this.handleModal}
      >
        ${this.modal === "help" ? html`<wd-help></wd-help>` : null}
        ${this.modal === "stats" ? html`<wd-stats></wd-stats>` : null}
      </wd-modal>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-app": CwApp;
  }
}
