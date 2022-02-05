import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./cw-tile.ts";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("cw-row")
export class CwRow extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    :host([invalid]) {
      animation-name: Shake;
      animation-duration: 600ms;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 5px;
    }
    .win {
      animation-name: Bounce;
      animation-duration: 1000ms;
    }

    @keyframes Bounce {
      0%,
      20% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      50% {
        transform: translateY(5px);
      }
      60% {
        transform: translateY(-15px);
      }
      80% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes Shake {
      10%,
      90% {
        transform: translateX(-1px);
      }

      20%,
      80% {
        transform: translateX(2px);
      }

      30%,
      50%,
      70% {
        transform: translateX(-4px);
      }

      40%,
      60% {
        transform: translateX(4px);
      }
    }
  `;

  render() {
    return html`
      <div class="row">
        <cw-tile></cw-tile>
        <cw-tile></cw-tile>
        <cw-tile></cw-tile>
        <cw-tile></cw-tile>
        <cw-tile></cw-tile>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-row": CwRow;
  }
}
