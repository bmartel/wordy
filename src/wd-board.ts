import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GameStatus, Guess, initializeGuesses, WORD_SIZE } from "./utils";
import "./wd-row.ts";

@customElement("wd-board")
export class CwBoard extends LitElement {
  @property()
  guess: number = 0;
  @property()
  status: GameStatus = "idle";
  @property()
  guesses: Guess[] = initializeGuesses;

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      overflow: hidden;
      box-sizing: border-box;
      font-size: var(--wd-board-font-size);
      line-height: var(--wd-board-font-size);
    }
    .board {
      width: 10.9375em;
      height: 13.125em;
      display: grid;
      grid-template-rows: repeat(${WORD_SIZE}, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
  `;

  render() {
    return html`
      <div class="board">
        <wd-row
          .guess=${this.guesses[0].letters}
          .result=${this.guesses[0].result}
          .status=${this.guess === 0
            ? this.status
            : this.guesses[0].status === "evaluated"
            ? "reveal"
            : undefined}
          .evaluated=${this.guesses[0].status === "evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[1].letters}
          .result=${this.guesses[1].result}
          .status=${this.guess === 1
            ? this.status
            : this.guesses[1].status === "evaluated"
            ? "reveal"
            : undefined}
          .evaluated=${this.guesses[1].status === "evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[2].letters}
          .result=${this.guesses[2].result}
          .status=${this.guess === 2
            ? this.status
            : this.guesses[2].status === "evaluated"
            ? "reveal"
            : undefined}
          .evaluated=${this.guesses[2].status === "evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[3].letters}
          .result=${this.guesses[3].result}
          .status=${this.guess === 3
            ? this.status
            : this.guesses[3].status === "evaluated"
            ? "reveal"
            : undefined}
          .evaluated=${this.guesses[3].status === "evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[4].letters}
          .result=${this.guesses[4].result}
          .status=${this.guess === 4
            ? this.status
            : this.guesses[4].status === "evaluated"
            ? "reveal"
            : undefined}
          .evaluated=${this.guesses[4].status === "evaluated"}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[5].letters}
          .result=${this.guesses[5].result}
          .status=${this.guess === 5
            ? this.status
            : this.guesses[5].status === "evaluated"
            ? "reveal"
            : undefined}
          .evaluated=${this.guesses[5].status === "evaluated"}
        ></wd-row>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-board": CwBoard;
  }
}
