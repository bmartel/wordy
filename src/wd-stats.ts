import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { GameStats, GuessDistribution, manager } from "./utils";

type GuessDistributionKey = keyof GuessDistribution;

@customElement("wd-stats")
export class CwStats extends LitElement {
  @state()
  stats: GameStats = {} as GameStats;
  @state()
  lastGameId: string = "";
  @state()
  lastGuess: number = 0;
  @state()
  activeGameId: string = "";

  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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

    #statistics {
      display: flex;
      margin-bottom: ;
    }

    .statistic-container {
      flex: 1;
    }

    .statistic-container .statistic {
      font-size: 36px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      letter-spacing: 0.05em;
      font-variant-numeric: proportional-nums;
    }

    .statistic.timer {
      font-variant-numeric: initial;
    }

    .statistic-container .label {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    #guess-distribution {
      width: 80%;
    }

    .graph-container {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      padding-bottom: 4px;
      font-size: 14px;
      line-height: 20px;
    }

    .graph-container .graph {
      width: 100%;
      height: 100%;
      padding-left: 4px;
    }

    .graph-container .graph .graph-bar {
      height: 100%;
      /* Assume no wins */
      width: 0%;
      position: relative;
      background-color: var(--color-absent);
      display: flex;
      justify-content: center;
    }

    .graph-container .graph .graph-bar.highlight {
      background-color: var(--color-correct);
    }

    .graph-container .graph .graph-bar.align-right {
      justify-content: flex-end;
      padding-right: 8px;
    }

    .graph-container .graph .num-guesses {
      font-weight: bold;
      color: var(--tile-text-color);
    }

    #statistics,
    #guess-distribution {
      padding-bottom: 10px;
    }

    .footer {
      display: flex;
      width: 100%;
    }

    .countdown {
      border-right: 1px solid var(--color-tone-1);
      padding-right: 12px;
      width: 50%;
    }

    .share {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 12px;
      width: 50%;
    }

    .no-data {
      text-align: center;
    }

    button#share-button {
      background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
      font-family: inherit;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
      width: 80%;
      font-size: 20px;
      height: 52px;
      -webkit-filter: brightness(100%);
    }
    button#share-button:hover {
      opacity: 0.9;
    }
    button#share-button game-icon {
      width: 24px;
      height: 24px;
      padding-left: 8px;
    }
  `;

  async connectedCallback(): Promise<void> {
    await super.connectedCallback();
    const { stats, active } = await manager;
    this.stats = stats();
    this.lastGameId = this.stats.lastGameId || "";
    this.activeGameId = active.id;
    this.lastGuess = this.stats.lastGuess || -1;
  }

  graphWidth(index: GuessDistributionKey) {
    const totalWins = this.stats.wins;
    if (totalWins) {
      return Math.max(
        Math.floor((this.stats.distribution[index] / totalWins) * 100),
        7
      );
    }
    return 7;
  }

  render() {
    return html`
      <div class="container">
        <h1>Statistics</h1>
        <div id="statistics">
          <div class="statistic-container">
            <div class="statistic">
              ${this.stats.wins || 0 + this.stats.losses || 0}
            </div>
            <div class="label">Played</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">
              ${this.stats.wins !== undefined && this.stats.losses !== undefined
                ? Math.floor(
                    (this.stats.wins / (this.stats.wins + this.stats.losses)) *
                      100
                  )
                : 0}
            </div>
            <div class="label">Win %</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">${this.stats.streak || 0}</div>
            <div class="label">Current Streak</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">${this.stats.maxStreak || 0}</div>
            <div class="label">Max Streak</div>
          </div>
        </div>
        <h1>Guess Distribution</h1>
        <div id="guess-distribution">
          ${this.lastGameId
            ? html`
                <div class="graph-container">
                  <div class="guess">1</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[0] > 0
                        ? "align-right"
                        : ""} ${this.lastGameId === this.activeGameId &&
                      this.lastGuess === 0
                        ? "highlight"
                        : ""}"
                      style="width: ${this.graphWidth(0)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[0]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">2</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[1] > 0
                        ? "align-right"
                        : ""} ${this.lastGameId === this.activeGameId &&
                      this.lastGuess === 1
                        ? "highlight"
                        : ""}"
                      style="width: ${this.graphWidth(1)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[1]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">3</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[2] > 0
                        ? "align-right"
                        : ""} ${this.lastGameId === this.activeGameId &&
                      this.lastGuess === 2
                        ? "highlight"
                        : ""}"
                      style="width: ${this.graphWidth(2)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[2]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">4</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[3] > 0
                        ? "align-right"
                        : ""} ${this.lastGameId === this.activeGameId &&
                      this.lastGuess === 3
                        ? "highlight"
                        : ""}"
                      style="width: ${this.graphWidth(3)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[3]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">5</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[4] > 0
                        ? "align-right"
                        : ""} ${this.lastGameId === this.activeGameId &&
                      this.lastGuess === 4
                        ? "highlight"
                        : ""}"
                      style="width: ${this.graphWidth(4)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[4]}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="graph-container">
                  <div class="guess">6</div>
                  <div class="graph">
                    <div
                      class="graph-bar ${this.stats.distribution[5] > 0
                        ? "align-right"
                        : ""} ${this.lastGameId === this.activeGameId &&
                      this.lastGuess === 5
                        ? "highlight"
                        : ""}"
                      style="width: ${this.graphWidth(5)}%;"
                    >
                      <div class="num-guesses">
                        ${this.stats.distribution[5]}
                      </div>
                    </div>
                  </div>
                </div>
              `
            : html` <div class="no-data">No Data</div> `}
        </div>
        <div id="guess-distribution"></div>
        <div class="footer"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-stats": CwStats;
  }
}
