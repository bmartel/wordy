import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./wd-icon.ts";

@customElement("wd-modal")
export class CwModal extends LitElement {
  @property({ reflect: true })
  open = false;

  static styles = css`
    .overlay {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      background-color: var(--opacity-50);
      z-index: 3000;
    }

    :host([open]) .overlay {
      display: flex;
    }

    .content {
      position: relative;
      border-radius: 8px;
      border: 1px solid var(--color-tone-6);
      background-color: var(--modal-content-bg);
      color: var(--color-tone-1);
      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);
      width: 90%;
      max-height: 90%;
      overflow-y: auto;
      animation: SlideIn 200ms;
      max-width: var(--game-max-width);
      padding: 16px;
      box-sizing: border-box;
    }

    .content.closing {
      animation: SlideOut 200ms;
    }

    .close-icon {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 16px;
      right: 16px;
    }

    wd-icon {
      position: fixed;
      user-select: none;
      cursor: pointer;
    }

    @keyframes SlideIn {
      0% {
        transform: translateY(30px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    @keyframes SlideOut {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateY(60px);
      }
    }
  `;

  render() {
    return html`
      <div class="overlay">
        <div class="content">
          <slot></slot>
          <div class="close-icon">
            <wd-icon name="x"></wd-icon>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-modal": CwModal;
  }
}
