import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TileStatus } from "./utils";

@customElement("cw-tile")
export class CwTile extends LitElement {
  @property({ reflect: true })
  status: TileStatus = "empty";
  @property({ reflect: true })
  animation: string = "";
  @property()
  letter: string = "";

  static styles = css`
    :host {
      display: inline-block;
    }
    .tile {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: var(--tile-text-color);
      text-transform: uppercase;
      user-select: none;

      border: 2px solid transparent;

      will-change: color, background-color, border-color;
      transition-property: color, background-color, border-color;
      transition-duration: 0ms;
      transition-delay: var(--transition-delay, 250ms);
      transition-timing-function: ease-out;
    }
    .tile::before {
      content: "";
      display: inline-block;
      padding-bottom: 100%;
    }
    :host([status="empty"]) > .tile {
      border-color: var(--cw-border-color);
    }
    :host([status="tbd"]) > .tile {
      background-color: var(--cw-background-color);
      border-color: var(--cw-border-color-emphasis);
    }
    :host([status="correct"]) > .tile {
      background-color: var(--color-correct);
      color: var(--key-evaluated-text-color);
    }
    :host([status="present"]) > .tile {
      background-color: var(--color-present);
      color: var(--key-evaluated-text-color);
    }
    :host([status="absent"]) > .tile {
      background-color: var(--color-absent);
      color: var(--key-evaluated-text-color);
    }
    :host([animation="pop"]) > .tile {
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
    :host([animation="flip"]) > .tile {
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
    return html` <div class="tile">${this.letter}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-tile": CwTile;
  }
}
