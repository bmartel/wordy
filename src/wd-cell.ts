import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cellStatus } from "./utils";

@customElement("wd-cell")
export class Cwcell extends LitElement {
  @property({ reflect: true })
  status: cellStatus = "empty";
  @property({ reflect: true })
  animation: string = "";
  @property()
  letter: string = "";

  static styles = css`
    :host {
      display: inline-block;
    }
    .cell {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: var(--cell-text-color);
      text-transform: uppercase;
      user-select: none;

      border: 2px solid transparent;

      will-change: color, background-color, border-color;
      transition-property: color, background-color, border-color;
      transition-duration: 0ms;
      transition-delay: var(--transition-delay, 250ms);
      transition-timing-function: ease-out;
    }
    .cell::before {
      content: "";
      display: inline-block;
      padding-bottom: 100%;
    }
    :host([status="empty"]) > .cell {
      border-color: var(--wd-border-color);
    }
    :host([status="tbd"]) > .cell {
      background-color: var(--wd-background-color);
      border-color: var(--wd-border-color-emphasis);
    }
    :host([status="correct"]) > .cell {
      background-color: var(--color-correct);
      color: var(--key-evaluated-text-color);
    }
    :host([status="present"]) > .cell {
      background-color: var(--color-present);
      color: var(--key-evaluated-text-color);
    }
    :host([status="absent"]) > .cell {
      background-color: var(--color-absent);
      color: var(--key-evaluated-text-color);
    }
    :host([animation="pop"]) > .cell {
      animation-name: PopIn;
      animation-duration: 100ms;
    }
    @keyframes PopIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }

      40% {
        transform: scale(1.1);
        opacity: 1;
      }
    }
    :host([animation="flip"]) > .cell {
      animation-name: Flip;
      animation-duration: 500ms;
      animation-delay: var(--animation-delay, 0ms);
      animation-timing-function: ease-in;
    }
    @keyframes Flip {
      0% {
        transform: rotateX(0);
      }
      50% {
        transform: rotateX(-90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }
  `;

  render() {
    return html` <div class="cell">${this.letter}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-cell": Cwcell;
  }
}
