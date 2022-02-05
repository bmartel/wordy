import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GameStatus, Guess, initializeGuesses } from "./utils";
import "./cw-row.ts";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("cw-board")
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
      font-size: var(--cw-board-font-size);
      line-height: var(--cw-board-font-size);
    }
    .board {
      width: 10.9375em;
      height: 13.125em;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
  `;

  render() {
    return html`
      <div class="board">
        <cw-row
          .guess=${this.guesses[0].letters}
          .result=${this.guesses[0].result}
          .status=${this.guess === 0 ? this.status : undefined}
        ></cw-row>
        <cw-row
          .guess=${this.guesses[1].letters}
          .result=${this.guesses[1].result}
          .status=${this.guess === 1 ? this.status : undefined}
        ></cw-row>
        <cw-row
          .guess=${this.guesses[2].letters}
          .result=${this.guesses[2].result}
          .status=${this.guess === 2 ? this.status : undefined}
        ></cw-row>
        <cw-row
          .guess=${this.guesses[3].letters}
          .result=${this.guesses[3].result}
          .status=${this.guess === 3 ? this.status : undefined}
        ></cw-row>
        <cw-row
          .guess=${this.guesses[4].letters}
          .result=${this.guesses[4].result}
          .status=${this.guess === 4 ? this.status : undefined}
        ></cw-row>
        <cw-row
          .guess=${this.guesses[5].letters}
          .result=${this.guesses[5].result}
          .status=${this.guess === 5 ? this.status : undefined}
        ></cw-row>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-board": CwBoard;
  }
}
