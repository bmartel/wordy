import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wd-game-in-progress")
export class CwGameInProgress extends LitElement {
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
    p {
      margin: 12px 0;
    }
    .content {
      flex: 1;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1>Game In Progress</h1>
        <div class="content">
          <p>
            You are currently in the middle of an active game. To load a game
            from a shared link, you must first complete the current game.
          </p>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-game-in-progress": CwGameInProgress;
  }
}
