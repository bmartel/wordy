import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./wd-icon.ts";

@customElement("wd-modal")
export class CwModal extends LitElement {
  @property({ reflect: true })
  open = false;
  @property({ reflect: true })
  closing = false;

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
      background-color: var(--overlay-bg);
      z-index: 3000;
    }

    :host([open="true"]) .overlay,
    :host([closing="true"]) .overlay {
      display: flex;
    }

    :host([closing="true"]) .content {
      animation: SlideOut 200ms;
    }

    .content {
      position: relative;
      border-radius: 8px;
      border: 1px solid var(--wd-border-color);
      background-color: var(--modal-content-bg);
      color: var(--modal-content-color);
      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);
      width: 90%;
      max-height: 90%;
      overflow-y: auto;
      animation: SlideIn 200ms;
      max-width: var(--wd-max-width);
      padding: 16px;
      box-sizing: border-box;
    }

    .close-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-icon-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
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

  private closeModal(e: Event) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("wd-modal", {
        detail: { open: false },
        composed: true,
        bubbles: true,
      })
    );
  }

  private preventClose(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return html`
      <div class="overlay" @click=${this.closeModal}>
        <div class="content" @click=${this.preventClose}>
          <slot></slot>
          <button @click=${this.closeModal} class="close-icon">
            <wd-icon name="x"></wd-icon>
          </button>
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
