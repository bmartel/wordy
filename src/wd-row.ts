import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./wd-cell.ts";
import {
  initializeGuess,
  Guess,
  INVALID_ANIMATION_DURATION,
  WORD_SIZE,
  fill,
  GameStatus,
} from "./utils";

@customElement("wd-row")
export class CwRow extends LitElement {
  @property()
  guess: Guess["letters"] = initializeGuess.letters;
  @property()
  result: Guess["result"] = initializeGuess.result;
  @property({ reflect: true })
  status: GameStatus = "idle";
  @property()
  evaluated = false;

  revealed = false;

  static styles = css`
    :host {
      display: block;
    }
    :host([status="invalid"]) {
      animation-name: Shake;
      animation-duration: ${INVALID_ANIMATION_DURATION}ms;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(${WORD_SIZE}, 1fr);
      grid-gap: 5px;
    }
    @keyframes Shake {
      10%,
      90% {
        transform: translateX(-1px);
      }

      20%,
      80% {
        transform: translateX(2px);
      }

      30%,
      50%,
      70% {
        transform: translateX(-4px);
      }

      40%,
      60% {
        transform: translateX(4px);
      }
    }
  `;

  protected updated(): void {
    if (!this.revealed && this.status === "reveal") {
      this.revealed = true;
    }
  }

  render() {
    let letters: string[] = this.guess.split("");
    letters = [
      ...letters,
      ...(fill(() => "", WORD_SIZE - letters.length) as string[]),
    ];
    const revealing = this.status === "reveal" && !this.revealed;

    return html`
      <div class="row">
        <wd-cell
          style="--transition-delay:${this.evaluated && this.status !== "win"
            ? "0ms"
            : revealing
            ? "250ms"
            : "0ms"};"
          .letter=${letters[0]}
          .status=${this.status === "reveal" ||
          this.evaluated ||
          this.status === "win" ||
          this.revealed
            ? this.result[0]
            : letters[0] !== ""
            ? "tbd"
            : "empty"}
          .animation=${letters[0] !== ""
            ? this.evaluated && this.status !== "win"
              ? ""
              : revealing
              ? "flip"
              : this.status === "win"
              ? "bounce"
              : this.revealed
              ? ""
              : "pop"
            : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:500ms;--transition-delay:${this.evaluated &&
          this.status !== "win"
            ? "0ms"
            : revealing
            ? "750ms"
            : "0ms"};"
          .letter=${letters[1]}
          .status=${this.status === "reveal" ||
          this.evaluated ||
          this.status === "win" ||
          this.revealed
            ? this.result[1]
            : letters[1] !== ""
            ? "tbd"
            : "empty"}
          .animation=${letters[1] !== ""
            ? this.evaluated && this.status !== "win"
              ? ""
              : revealing
              ? "flip"
              : this.status === "win"
              ? "bounce"
              : this.revealed
              ? ""
              : "pop"
            : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:1000ms;--transition-delay:${this.evaluated &&
          this.status !== "win"
            ? "0ms"
            : revealing
            ? "1250ms"
            : "0ms"};"
          .letter=${letters[2]}
          .status=${this.status === "reveal" ||
          this.evaluated ||
          this.status === "win" ||
          this.revealed
            ? this.result[2]
            : letters[2] !== ""
            ? "tbd"
            : "empty"}
          .animation=${letters[2] !== ""
            ? this.evaluated && this.status !== "win"
              ? ""
              : revealing
              ? "flip"
              : this.status === "win"
              ? "bounce"
              : this.revealed
              ? ""
              : "pop"
            : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:1500ms;--transition-delay:${this.evaluated &&
          this.status !== "win"
            ? "0ms"
            : revealing
            ? "1750ms"
            : "0ms"};"
          .letter=${letters[3]}
          .status=${this.status === "reveal" ||
          this.evaluated ||
          this.status === "win" ||
          this.revealed
            ? this.result[3]
            : letters[3] !== ""
            ? "tbd"
            : "empty"}
          .animation=${letters[3] !== ""
            ? this.evaluated && this.status !== "win"
              ? ""
              : revealing
              ? "flip"
              : this.status === "win"
              ? "bounce"
              : this.revealed
              ? ""
              : "pop"
            : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:2000ms;--transition-delay:${this.evaluated &&
          this.status !== "win"
            ? "0ms"
            : revealing
            ? "2250ms"
            : "0ms"};"
          .letter=${letters[4]}
          .status=${this.status === "reveal" ||
          this.evaluated ||
          this.status === "win" ||
          this.revealed
            ? this.result[4]
            : letters[4] !== ""
            ? "tbd"
            : "empty"}
          .animation=${letters[4] !== ""
            ? this.evaluated && this.status !== "win"
              ? ""
              : revealing
              ? "flip"
              : this.status === "win"
              ? "bounce"
              : this.revealed
              ? ""
              : "pop"
            : ""}
        ></wd-cell>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-row": CwRow;
  }
}
