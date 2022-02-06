import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./wd-icon";

@customElement("wd-header")
export class CwHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--wd-header-height);
      color: var(--color-tone-1);
      border-bottom: 1px solid var(--color-tone-4);
      gap: 4px;
      padding-inline: 2px;
    }
    .title {
      font-weight: 400;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: 0.1em;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      pointer-events: none;
    }
    button.icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 36px;
      opacity: 0.5;
      color: var(--wd-color);
      background: none;
      border: none;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <header>
        <div class="menu">
          <button id="help-button" class="icon" aria-label="help">
            <wd-icon name="help"></wd-icon>
          </button>
        </div>
        <div class="title">🟨🟩🟨🟩🟩</div>
        <div class="menu">
          <button id="statistics-button" class="icon" aria-label="statistics">
            <wd-icon name="stats"></wd-icon>
          </button>
          <button id="settings-button" class="icon" aria-label="settings">
            <wd-icon name="settings"></wd-icon>
          </button>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-header": CwHeader;
  }
}
