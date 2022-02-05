import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./cw-tile.ts";
import {
  initializeGuess,
  Guess,
  INVALID_ANIMATION_DURATION,
  WIN_ANIMATION_DURATION,
  WORD_SIZE,
  fill,
  GameStatus,
} from "./utils";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("cw-row")
export class CwRow extends LitElement {
  @property()
  guess: Guess["letters"] = initializeGuess.letters;
  @property()
  result: Guess["result"] = initializeGuess.result;
  @property({ reflect: true })
  status: GameStatus = "idle";

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
    :host([status="win"]) {
      animation-name: Bounce;
      animation-duration: ${WIN_ANIMATION_DURATION}ms;
    }

    @keyframes Bounce {
      0%,
      20% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      50% {
        transform: translateY(5px);
      }
      60% {
        transform: translateY(-15px);
      }
      80% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0);
      }
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
    if (this.status === "reveal") {
      this.revealed = true;
    }
  }

  render() {
    let letters: string[] = this.guess.split("");
    letters = [
      ...letters,
      ...(fill(() => "", WORD_SIZE - letters.length) as string[]),
    ];

    return html`
      <div class="row">
        <cw-tile
          .letter=${letters[0]}
          .status=${this.revealed ? this.result[0] : "tbd"}
          .animation=${letters[0] !== ""
            ? this.status === "reveal"
              ? "flip-in"
              : "pop"
            : ""}
        ></cw-tile>
        <cw-tile
          .letter=${letters[1]}
          .status=${this.revealed ? this.result[1] : "tbd"}
          .animation=${letters[1] !== ""
            ? this.status === "reveal"
              ? "flip-in"
              : "pop"
            : ""}
        ></cw-tile>
        <cw-tile
          .letter=${letters[2]}
          .status=${this.revealed ? this.result[2] : "tbd"}
          .animation=${letters[2] !== ""
            ? this.status === "reveal"
              ? "flip-in"
              : "pop"
            : ""}
        ></cw-tile>
        <cw-tile
          .letter=${letters[3]}
          .status=${this.revealed ? this.result[3] : "tbd"}
          .animation=${letters[3] !== ""
            ? this.status === "reveal"
              ? "flip-in"
              : "pop"
            : ""}
        ></cw-tile>
        <cw-tile
          .letter=${letters[4]}
          .status=${this.revealed ? this.result[4] : "tbd"}
          .animation=${letters[4] !== ""
            ? this.status === "reveal"
              ? "flip-in"
              : "pop"
            : ""}
        ></cw-tile>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-row": CwRow;
  }
}
