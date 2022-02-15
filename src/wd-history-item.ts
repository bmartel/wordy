import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  createShareableResult,
  Game,
  GUESS_SIZE,
  share,
  WORD_SIZE,
} from "./utils";
import "./wd-icon.ts";

@customElement("wd-history-item")
export class CwHistoryItem extends LitElement {
  @property()
  game: Game | null = null;

  static styles = css`
    :host {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      flex: 1;
      gap: 1rem;
    }
    .guess-grid {
      box-sizing: border-box;
      display: grid;
      grid-template-rows: repeat(${GUESS_SIZE}, 1fr);
      grid-template-columns: repeat(${WORD_SIZE}, 1fr);
      grid-gap: 1px;
      padding: 1px;
      box-sizing: border-box;
      width: 100%;
      max-width: 80px;
      flex-shrink: 0;
    }
    .guess-grid-item {
      box-sizing: border-box;
      aspect-ratio: 1;
      border-radius: 1px;
      overflow: hidden;
    }
    .guess-grid-item.present {
      background-color: var(--color-present);
    }
    .guess-grid-item.absent {
      background-color: var(--color-absent);
    }
    .guess-grid-item.correct {
      background-color: var(--color-correct);
    }
    .guess-grid-item.empty {
      background-color: var(--color-absent);
    }
    .results {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      justify-content: space-around;
      gap: 1rem;
      overflow: hidden;
    }
    .result {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
    }
    h3 {
      font-size: 1rem;
      margin: 0;
      font-weight: 700;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .stats {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      justify-content: flex-end;
      gap: 0.25rem;
    }
    .status {
      flex-shrink: 0;
      height: 32px;
      width: 32px;
      overflow: hidden;
      padding: 4px;
      border-radius: 9999px;
      color: var(--key-evaluated-text-color);
      box-sizing: border-box;
    }
    .circlecheck {
      background-color: var(--color-correct);
    }
    .circlex {
      background-color: var(--color-error);
    }
    button.share {
      box-sizing: border-box;
      flex-shrink: 0;
      background-color: transparent;
      color: var(--wd-share-color);
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
      font-size: 16px;
      height: 32px;
      width: 32px;
      -webkit-filter: brightness(100%);
      opacity: 0.7;
      transition: opacity 0.2s ease-out, backround-color 0.2s ease-out;
    }
    button.share:hover {
      background-color: var(--wd-share-bg);
      opacity: 1;
    }
    button.share wd-icon {
      width: 20px;
      height: 20px;
    }
    time {
      font-size: 0.9rem;
      opacity: 0.7;
    }
  `;

  private async share() {
    if (!this.game) return;
    await share(createShareableResult(this.game.guesses), this.game.seed);
  }

  get duration() {
    if (!this.game) return "";
    let ms = (this.game!.end! - this.game!.start!) / 1000;

    if (ms < 1) {
      return "< 1s";
    }
    if (ms < 60) {
      return `${ms}s`;
    }
    if (ms / 60 < 60) {
      return `${Math.floor(ms / 60)}m`;
    }
    if (ms / 60 / 24 < 24) {
      return `${Math.floor(ms)}h`;
    }
    return `${Math.floor(ms / 60 / 24)}d`;
  }

  render() {
    if (this.game === null || !this.game.end) {
      return null;
    }
    return html`
      <div class="guess-grid">
        ${this.game.guesses.map((guess) =>
          guess.result.map(
            (result) => html`<div class="guess-grid-item ${result}"></div>`
          )
        )}
      </div>
      <div class="results">
        <div class="result">
          <wd-icon
            class="status ${this.game.status === "win"
              ? "circlecheck"
              : "circlex"}"
            name=${this.game.status === "win" ? "circlecheck" : "circlex"}
          ></wd-icon>
          <h3>${this.game.seed}</h3>
          <button class="share" @click=${this.share}>
            <wd-icon name="share" size="sm"></wd-icon>
          </button>
        </div>
        <div class="stats">
          <span>${this.duration}</span>
          <time datetime="${this.game.start}"
            >${new Intl.DateTimeFormat().format(
              new Date(this.game.start!)
            )}</time
          >
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-history-item": CwHistoryItem;
  }
}
