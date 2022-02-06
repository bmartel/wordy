import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wd-theme")
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

      --wd-background-color: var(--white);
      --wd-color: var(--white);
      --wd-border-color: var(--color-tone-1);
      --wd-border-color-emphasis: var(--color-tone-2);

      --wd-max-width: 500px;
      --wd-header-height: 50px;
      --wd-keyboard-height: 200px;
      --wd-board-font-size: 32px;
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
        --wd-background-color: var(--color-tone-7);
        --wd-color: var(--white);
        --wd-border-color: var(--color-tone-6);
        --wd-border-color-emphasis: var(--color-tone-4);
      }
    }
    @media (max-height: 600px) {
      :host {
        --wd-board-font-size: 28px;
      }
    }
    @media (max-height: 500px) {
      :host {
        --wd-board-font-size: 24px;
      }
    }
    main {
      height: 100%;
      background-color: var(--wd-background-color);
      color: var(--wd-color);
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
    "wd-theme": CwTheme;
  }
}
