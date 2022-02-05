import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("cw-tile")
export class CwTile extends LitElement {
  static styles = css`
    :host {
      --cw-tile-text-color: var(--cw-color);
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
    }
    .tile::before {
      content: "";
      display: inline-block;
      padding-bottom: 100%;
    }
    :host([status="empty"]) > .tile {
      border: 2px solid var(--color-tone-4);
    }
    :host([status="tbd"]) > .tile {
      background-color: var(--color-tone-7);
      border: 2px solid var(--color-tone-5);
      color: var(--color-tone-1);
    }
    :host([status="correct"]) > .tile {
      background-color: var(--color-correct);
    }
    :host([status="present"]) > .tile {
      background-color: var(--color-present);
    }
    :host([status="absent"]) > .tile {
      background-color: var(--color-absent);
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
    :host([animation="flip-in"]) > .tile {
      animation-name: FlipIn;
      animation-duration: 250ms;
      animation-timing-function: ease-in;
    }
    @keyframes FlipIn {
      0% {
        transform: rotateX(0);
      }
      100% {
        transform: rotateX(-90deg);
      }
    }
    :host([animation="flip-out"]) > .tile {
      animation-name: FlipOut;
      animation-duration: 250ms;
      animation-timing-function: ease-in;
    }
    @keyframes FlipOut {
      0% {
        transform: rotateX(-90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }
  `;

  @property({ reflect: true })
  status: string = "tbd";

  @property({ reflect: true })
  animation: string = "";

  render() {
    return html` <div class="tile"></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-tile": CwTile;
  }
}
