import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { allowedKeyMap, letterKeyMap, LetterKeyResultMap } from "./utils";
import "./wd-icon";

@customElement("wd-keyboard")
export class CwKeyboard extends LitElement {
  @property()
  letters: LetterKeyResultMap = letterKeyMap as LetterKeyResultMap;

  static styles = css`
    :host {
      height: var(--keyboard-height);
    }
    #keyboard {
      margin: 0 8px;
      user-select: none;
    }

    .row {
      display: flex;
      width: 100%;
      margin: 0 auto 8px;
      touch-action: manipulation;
    }

    button {
      font-family: inherit;
      font-weight: bold;
      border: 0;
      padding: 0;
      margin: 0 6px 0 0;
      height: 58px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      background-color: var(--key-bg);
      color: var(--key-text-color);
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
    }

    button:focus {
      outline: none;
    }

    button.fade {
      transition: background-color 0.1s ease, color 0.1s ease;
    }

    button:last-of-type {
      margin: 0;
    }

    .half {
      flex: 0.5;
    }

    .one {
      flex: 1;
    }

    .one-and-a-half {
      flex: 1.5;
      font-size: 12px;
    }

    .two {
      flex: 2;
    }

    button[data-state="correct"] {
      background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
    }

    button[data-state="present"] {
      background-color: var(--key-bg-present);
      color: var(--key-evaluated-text-color);
    }

    button[data-state="absent"] {
      background-color: var(--key-bg-absent);
      color: var(--key-evaluated-text-color);
    }
  `;

  createRenderRoot() {
    const root = super.createRenderRoot();

    const dispatchKey = (e: Event) => {
      e.preventDefault();
      const { key = "", state = "empty" } = (e?.target as any)?.dataset || {};
      if (
        state === "empty" &&
        allowedKeyMap[key as keyof typeof allowedKeyMap]
      ) {
        window.dispatchEvent(new KeyboardEvent("keydown", { key }));
      }
    };
    root.addEventListener("click", dispatchKey);
    return root;
  }

  render() {
    return html`
      <div id="keyboard">
        <div class="row">
          <button data-key="q" data-state=${this.letters.q}>q</button>
          <button data-key="w" data-state=${this.letters.w}>w</button>
          <button data-key="e" data-state=${this.letters.e}>e</button>
          <button data-key="r" data-state=${this.letters.r}>r</button>
          <button data-key="t" data-state=${this.letters.t}>t</button>
          <button data-key="y" data-state=${this.letters.y}>y</button>
          <button data-key="u" data-state=${this.letters.u}>u</button>
          <button data-key="i" data-state=${this.letters.i}>i</button>
          <button data-key="o" data-state=${this.letters.o}>o</button>
          <button data-key="p" data-state=${this.letters.p}>p</button>
        </div>
        <div class="row">
          <div class="spacer half"></div>
          <button data-key="a" data-state=${this.letters.a}>a</button>
          <button data-key="s" data-state=${this.letters.s}>s</button>
          <button data-key="d" data-state=${this.letters.d}>d</button>
          <button data-key="f" data-state=${this.letters.f}>f</button>
          <button data-key="g" data-state=${this.letters.g}>g</button>
          <button data-key="h" data-state=${this.letters.h}>h</button>
          <button data-key="j" data-state=${this.letters.j}>j</button>
          <button data-key="k" data-state=${this.letters.k}>k</button>
          <button data-key="l" data-state=${this.letters.l}>l</button>
          <div class="spacer half"></div>
        </div>
        <div class="row">
          <button data-key="Enter" class="one-and-a-half">enter</button
          ><button data-key="z" data-state=${this.letters.z}>z</button>
          <button data-key="x" data-state=${this.letters.x}>x</button>
          <button data-key="c" data-state=${this.letters.c}>c</button>
          <button data-key="v" data-state=${this.letters.v}>v</button>
          <button data-key="b" data-state=${this.letters.b}>b</button>
          <button data-key="n" data-state=${this.letters.n}>n</button>
          <button data-key="m" data-state=${this.letters.m}>m</button>
          <button data-key="Backspace" class="one-and-a-half">
            <wd-icon name="backspace"></wd-icon>
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-keyboard": CwKeyboard;
  }
}
