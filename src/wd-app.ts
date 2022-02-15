import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import {
  manager,
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
  isValidWord,
  Toast,
  RowStatus,
  Game,
  maybeDecryptSolution,
  WIN_ANIMATION_DURATION,
} from "./utils";
import "./wd-header.ts";
import "./wd-board.ts";
import "./wd-keyboard.ts";
import "./wd-help.ts";
import "./wd-seed-played.ts";
import "./wd-game-in-progress.ts";
import "./wd-settings.ts";
import "./wd-stats.ts";
import "./wd-page.ts";
import "./wd-modal.ts";

@customElement("wd-app")
export class CwApp extends LitElement {
  @state()
  gameId: string = "";
  @state()
  seed: string = "";
  @state()
  guess: number = 0;
  @state()
  guesses: Guess[] = initializeGuesses;
  @state()
  letters: LetterKeyResultMap = letterKeyMap as LetterKeyResultMap;
  @state()
  solution: string = "";
  @state()
  status: GameStatus = "idle";
  @state()
  page: string = "";
  @state()
  modal: string = "";
  @state()
  toast: string = "";
  @state()
  closingPage = false;
  @state()
  closingModal = false;

  _clearTimeout: any = null;
  _autosaveTimeout: any = null;

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
    ${import.meta.env.DEV
      ? css`
          .debug {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            position: absolute;
            color: red;
            top: 50%;
            left: 50%;
          }
          .debug > span {
            display: flex;
            gap: 0.5rem;
          }
        `
      : css``}
  `;

  private debugMode() {
    if (import.meta.env.DEV) {
      return html`
        <div class="debug">
          <span><span>id:</span><span>${this.gameId}</span></span>
          <span><span>solution:</span><span>${this.solution}</span></span>
          <span><span>seed:</span><span>${this.seed}</span></span>
        </div>
      `;
    }
    return null;
  }

  private handleModal(
    e: CustomEvent | { detail: { open: boolean; content?: string } }
  ) {
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

  private handleToast(e: CustomEvent | { detail: { content: string } }) {
    const { content = "" } = e.detail;
    Toast(content);
  }

  private handlePage(
    e: CustomEvent | { detail: { open: boolean; content?: string } }
  ) {
    const { open = false, content = "" } = e.detail;
    if (open) {
      this.page = content;
    } else {
      this.closingPage = true;
      setTimeout(() => {
        this.page = "";
        this.closingPage = false;
      }, 200);
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

  set activeStatus(value: RowStatus) {
    const guess = this.guesses[this.guess];

    guess.status = value as any;

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
    if (
      this.activeGuess.length < WORD_SIZE &&
      key in letterKeyMap &&
      this.letters[key] !== "absent"
    ) {
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
    // Toast message the reason
    switch (reason) {
      case ValidationReason.INVALID_CHAR_LEN:
        this.handleToast({
          detail: {
            content: "Not enough letters!",
          },
        });
        break;
      case ValidationReason.INVALID_WORD:
        this.handleToast({
          detail: { content: "Not a valid word!" },
        });
        break;
      default:
        break;
    }
    this._clearTimeout = setTimeout(() => {
      this.status = "idle";
    }, INVALID_ANIMATION_DURATION);
  }

  private async validate(guess: string): Promise<ValidationResult> {
    if (guess.length < WORD_SIZE) {
      return {
        success: false,
        reason: ValidationReason.INVALID_CHAR_LEN,
      };
    }
    if (!(await isValidWord(guess))) {
      return {
        success: false,
        reason: ValidationReason.INVALID_WORD,
      };
    }
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
    const word = this.solution;
    const result = this.activeResult;

    // Allow the row cells to animate
    this.status = "reveal";

    // Determine results
    for (let c = 0; c < guess.length; c++) {
      const char = guess.charAt(c);
      const wChar = word.charAt(c);
      result[c] =
        wChar === char
          ? "correct"
          : word.indexOf(char) > -1
          ? "present"
          : "absent";
    }

    // Set the results so it will be displayed correctly
    this.activeResult = result;
  }

  private updateGameStatus() {
    this._clearTimeout = setTimeout(() => {
      this.updateKeyboard();
      this.activeStatus = "evaluated";
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
    }, 5 * 300);
  }

  private async attemptGuess() {
    if (this._clearTimeout) clearTimeout(this._clearTimeout);

    const guess = this.activeGuess;
    const result = await this.validate(guess);
    if (result.success) {
      this.determineResults(guess);
      this.updateGameStatus();
    } else {
      this.invalidGuess(guess, result.reason!);
    }

    this.saveGame();
  }

  _handleKeydown = async (e: KeyboardEvent) => {
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
        return await this.attemptGuess();
      default:
        return this.insertLetter(e.key.toLowerCase() as LetterKey);
    }
  };

  private async saveStats() {
    const { saveStats } = await manager;
    await saveStats(this.gameId);
  }

  private async saveGame() {
    if (this._autosaveTimeout) clearTimeout(this._autosaveTimeout);
    const { saveGame } = await manager;
    this._autosaveTimeout = setTimeout(async () => {
      const end =
        this.status === "win" || this.status === "lose"
          ? Date.now()
          : undefined;
      await saveGame({
        id: this.gameId,
        guess: this.guess,
        guesses: this.guesses,
        letters: this.letters,
        solution: this.solution,
        seed: this.seed,
        status: end ? this.status : "idle",
        end,
      });
      if (end) {
        await this.saveStats();
        setTimeout(() => {
          this.modal = "stats";
        }, WIN_ANIMATION_DURATION);
      }
    }, 5 * 500);
  }

  private async setupGame(game: Game) {
    try {
      this.gameId = game.id;
      this.guess = game.guess;
      this.guesses = game.guesses;
      this.solution = await maybeDecryptSolution(game.solution, game.iv);
      this.seed = game.seed;
      this.status = game.status;
      this.letters = game.letters;
    } catch (err) {
      console.log(err);
    }
  }

  private async startNewGame() {
    const { generateGame } = await manager;
    await this.setupGame(await generateGame());
    this.handleModal({ detail: { open: false } });
  }

  async connectedCallback() {
    super.connectedCallback();
    const { active: readActive, modal } = await manager;
    await this.setupGame(readActive());
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
      ${this.closingPage || this.page
        ? html`<wd-page
            .open=${!this.closingPage && this.page !== ""}
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
          </wd-page>`
        : ""}
      ${this.closingModal || this.modal
        ? html`<wd-modal
            .open=${!this.closingModal && this.modal !== ""}
            .closing=${this.closingModal}
            @wd-modal=${this.handleModal}
          >
            ${this.modal === "help" ? html`<wd-help></wd-help>` : null}
            ${this.modal === "game-in-progress"
              ? html`<wd-game-in-progress></wd-game-in-progress>`
              : null}
            ${this.modal === "seed-played"
              ? html`<wd-seed-played></wd-seed-played>`
              : null}
            ${this.modal === "help" ? html`<wd-help></wd-help>` : null}
            ${this.modal === "stats"
              ? html`<wd-stats @wd-new-game=${this.startNewGame}></wd-stats>`
              : null}
          </wd-modal>`
        : null}
      ${this.debugMode()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-app": CwApp;
  }
}
