import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./wd-icon.ts";

@customElement("wd-page")
export class CwPage extends LitElement {
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
      right: 0;
      bottom: 0;
      justify-content: center;
      background-color: var(--wd-background-color);
      animation: SlideIn 100ms linear;
      z-index: 2000;
    }

    :host([open="true"]) .overlay,
    :host([closing="true"]) .overlay {
      display: flex;
    }

    :host([closing="true"]) .overlay {
      animation: SlideOut 150ms linear;
    }

    .content {
      position: relative;
      color: var(--wd-color);
      padding: 0 32px;
      max-width: var(--wd-max-width);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .content-container {
      flex: 1;
      overflow-y: auto;
    }

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }

    .close-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
      cursor: pointer;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .content {
        max-width: 100%;
        padding: 0;
      }
      wd-icon {
        padding: 0 16px;
      }
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

  protected updated(): void {
    if (this.open) {
    }
  }

  private closePage() {
    this.dispatchEvent(
      new CustomEvent("wd-page", {
        detail: { open: false },
        composed: true,
        bubbles: true,
      })
    );
  }

  render() {
    return html`
      <div class="overlay">
        <div class="content">
          <header>
            <h1><slot></slot></h1>
            <button @click=${this.closePage} class="close-icon">
              <wd-icon name="x"></wd-icon>
            </button>
          </header>
          <div class="content-container">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-page": CwPage;
  }
}
