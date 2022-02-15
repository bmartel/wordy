import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Game, manager } from "./utils";
import "./wd-history-item.ts";

@customElement("wd-history")
export class CwHistory extends LitElement {
  @state()
  history: Game[] = [];

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      gap: 1rem;
      padding: 1rem 0.5rem;
      box-sizing: border-box;
      overflow: hidden;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    const { history } = await manager;
    this.history = history();
  }

  render() {
    return html`
      ${this.history.map(
        (game) => html` <wd-history-item .game=${game}></wd-history-item> `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-history": CwHistory;
  }
}
