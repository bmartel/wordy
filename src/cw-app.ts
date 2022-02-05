import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
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

  render() {
    return html`
      <cw-board></cw-board>
      <cw-keyboard></cw-keyboard>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-app": CwApp;
  }
}
