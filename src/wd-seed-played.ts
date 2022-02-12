import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wd-seed-played")
export class CwSeedPlayed extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px 0;
    }
    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }
    .content {
      flex: 1;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1>Game Already Played</h1>
        <div class="content">
          You have already played the game generated from the shared link. Each
          game is uniquely generated for the user. Upon completion (win or lose)
          you may share this game with others, and each player is allowed to
          play the shared game only once. You are not allowed to replay your own
          shared game link.
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-seed-played": CwSeedPlayed;
  }
}
