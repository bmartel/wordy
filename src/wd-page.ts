import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./wd-icon";

@customElement("wd-page")
export class CwPage extends LitElement {
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
      background-color: var(--color-background);
      animation: SlideIn 100ms linear;
      z-index: 2000;
    }

    :host([open="true"]) .overlay {
      display: flex;
    }

    .content {
      position: relative;
      color: var(--color-tone-1);
      padding: 0 32px;
      max-width: var(--wd-max-width);
      width: 100%;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .content-container {
      height: 100%;
    }

    .overlay.closing {
      animation: SlideOut 150ms linear;
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

    wd-icon {
      position: absolute;
      right: 0;
      user-select: none;
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

  render() {
    return html`
      <div class="overlay">
        <div class="content">
          <header>
            <h1><slot></slot></h1>
            <wd-icon name="x"></wd-icon>
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
