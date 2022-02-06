import { html, css, LitElement } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { customElement, property } from "lit/decorators.js";

const icons: Record<any, any> = {
  backspace: `<path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>`,
};

type Icon = keyof typeof icons;

@customElement("cw-icon")
export class CwIcon extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 24px;
      width: 24px;
    }
  `;

  @property()
  name: Icon = "";

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        ${unsafeSVG(icons[this.name])}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-icon": CwIcon;
  }
}
