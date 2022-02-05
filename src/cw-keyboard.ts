import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("cw-keyboard")
export class CwKeyboard extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
    }
  `;

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-keyboard": CwKeyboard;
  }
}
