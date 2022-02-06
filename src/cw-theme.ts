import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cw-theme")
export class CwTheme extends LitElement {
  static styles = css`
    :host {
      --color-tone-1: #d7e9f8;
      --color-tone-2: #81a8d5;
      --color-tone-3: #577bac;
      --color-tone-4: #345787;
      --color-tone-5: #213d6d;
      --color-tone-6: #142a5a;
      --color-tone-7: #060f1a;
      --opacity-50: rgba(0, 0, 0, 0.5);

      --green: #6aaa64;
      --darkendGreen: #538d4e;
      --yellow: #c9b458;
      --darkendYellow: #b39200;
      --lightGray: #d8d8d8;
      --gray: #86888a;
      --darkGray: #939598;
      --white: #fff;
      --black: #c40000;
      --orange: #f5793a;
      --blue: #85c0f9;

      --color-present: var(--yellow);
      --color-correct: var(--green);
      --color-absent: var(--color-tone-3);
      --cell-text-color: var(--color-tone-7);
      --key-text-color: var(--color-tone-7);
      --key-evaluated-text-color: var(--white);
      --key-bg: var(--color-tone-1);
      --key-bg-present: var(--color-present);
      --key-bg-correct: var(--color-correct);
      --key-bg-absent: var(--color-absent);
      --modal-content-bg: var(--color-tone-7);

      --cw-background-color: var(--white);
      --cw-color: var(--white);
      --cw-border-color: var(--color-tone-1);
      --cw-border-color-emphasis: var(--color-tone-2);

      --cw-max-width: 500px;
      --cw-header-height: 50px;
      --cw-keyboard-height: 200px;
      --cw-board-font-size: 32px;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        --color-present: var(--darkendYellow);
        --color-correct: var(--darkendGreen);
        --color-absent: var(--color-tone-6);
        --cell-text-color: var(--white);
        --key-text-color: var(--white);
        --key-evaluated-text-color: var(--white);
        --key-bg: var(--color-tone-3);
        --key-bg-present: var(--color-present);
        --key-bg-correct: var(--color-correct);
        --key-bg-absent: var(--color-absent);
        --modal-content-bg: var(--color-tone-7);
        --cw-background-color: var(--color-tone-7);
        --cw-color: var(--white);
        --cw-border-color: var(--color-tone-6);
        --cw-border-color-emphasis: var(--color-tone-4);
      }
    }
    @media (max-height: 600px) {
      :host {
        --cw-board-font-size: 28px;
      }
    }
    @media (max-height: 500px) {
      :host {
        --cw-board-font-size: 24px;
      }
    }
    main {
      height: 100%;
      background-color: var(--cw-background-color);
      color: var(--cw-color);
    }
  `;

  render() {
    return html`
      <main>
        <slot></slot>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cw-theme": CwTheme;
  }
}
