import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./cw-row.ts";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("cw-board")
export class CwBoard extends LitElement {
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
        <cw-row></cw-row>
        <cw-row></cw-row>
        <cw-row></cw-row>
        <cw-row></cw-row>
        <cw-row></cw-row>
        <cw-row></cw-row>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-board": CwBoard;
  }
}
