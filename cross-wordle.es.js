var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { css, LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
let CwTheme = class extends LitElement {
  render() {
    return html`
      <main>
        <slot></slot>
      </main>
    `;
  }
};
CwTheme.styles = css`
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
CwTheme = __decorateClass$7([
  customElement("wd-theme")
], CwTheme);
const letterKeyMap = {
  q: "empty",
  w: "empty",
  e: "empty",
  r: "empty",
  t: "empty",
  y: "empty",
  u: "empty",
  i: "empty",
  o: "empty",
  p: "empty",
  a: "empty",
  s: "empty",
  d: "empty",
  f: "empty",
  g: "empty",
  h: "empty",
  j: "empty",
  k: "empty",
  l: "empty",
  z: "empty",
  x: "empty",
  c: "empty",
  v: "empty",
  b: "empty",
  n: "empty",
  m: "empty"
};
const controlKeyMap = {
  Enter: true,
  Backspace: true
};
const allowedKeyMap = __spreadValues(__spreadValues({}, letterKeyMap), controlKeyMap);
const WORD_SIZE = 5;
const GUESS_SIZE = 6;
const INVALID_ANIMATION_DURATION = 600;
const WIN_ANIMATION_DURATION = 1e3;
var ValidationReason;
(function(ValidationReason2) {
  ValidationReason2[ValidationReason2["INVALID_CHAR_LEN"] = 0] = "INVALID_CHAR_LEN";
  ValidationReason2[ValidationReason2["INVALID_WORD"] = 1] = "INVALID_WORD";
})(ValidationReason || (ValidationReason = {}));
const fill = (func, length = 0) => Array.from({ length }, func);
const makeGuessResult = () => fill(() => "empty", WORD_SIZE);
const makeGuesses = (letters = "", result = void 0) => fill(() => ({ letters, result: result || [...makeGuessResult()] }), GUESS_SIZE);
const initializeGuesses = makeGuesses();
const initializeGuess = initializeGuesses[0];
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
const icons = {
  backspace: `<path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>`,
  stats: `<path fill="none" stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
  settings: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
  help: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
  x: `<path fill="none" stroke="currentColor stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`
};
let CwIcon = class extends LitElement {
  constructor() {
    super(...arguments);
    this.name = "";
  }
  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        ${unsafeSVG(icons[this.name])}
      </svg>
    `;
  }
};
CwIcon.styles = css`
    :host {
      display: block;
      height: 24px;
      width: 24px;
      pointer-events: none;
      user-select: none;
    }
  `;
__decorateClass$6([
  property()
], CwIcon.prototype, "name", 2);
CwIcon = __decorateClass$6([
  customElement("wd-icon")
], CwIcon);
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let CwHeader = class extends LitElement {
  render() {
    return html`
      <header>
        <div class="menu">
          <button id="help-button" class="icon" aria-label="help">
            <wd-icon name="help"></wd-icon>
          </button>
        </div>
        <div class="title">🟨🟩🟨🟩🟩</div>
        <div class="menu">
          <button id="statistics-button" class="icon" aria-label="statistics">
            <wd-icon name="stats"></wd-icon>
          </button>
          <button id="settings-button" class="icon" aria-label="settings">
            <wd-icon name="settings"></wd-icon>
          </button>
        </div>
      </header>
    `;
  }
};
CwHeader.styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--wd-header-height);
      color: var(--color-tone-1);
      border-bottom: 1px solid var(--color-tone-4);
      gap: 4px;
      padding-inline: 2px;
    }
    .title {
      font-weight: 400;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: 0.1em;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      pointer-events: none;
    }
    button.icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 36px;
      opacity: 0.5;
      color: var(--wd-color);
      background: none;
      border: none;
      cursor: pointer;
    }
  `;
CwHeader = __decorateClass$5([
  customElement("wd-header")
], CwHeader);
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
let Cwcell = class extends LitElement {
  constructor() {
    super(...arguments);
    this.status = "empty";
    this.animation = "";
    this.letter = "";
  }
  render() {
    return html` <div class="cell">${this.letter}</div> `;
  }
};
Cwcell.styles = css`
    :host {
      display: inline-block;
    }
    .cell {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: var(--cell-text-color);
      text-transform: uppercase;
      user-select: none;

      border: 2px solid transparent;

      will-change: color, background-color, border-color;
      transition-property: color, background-color, border-color;
      transition-duration: 0ms;
      transition-delay: var(--transition-delay, 250ms);
      transition-timing-function: ease-out;
    }
    .cell::before {
      content: "";
      display: inline-block;
      padding-bottom: 100%;
    }
    :host([status="empty"]) > .cell {
      border-color: var(--wd-border-color);
    }
    :host([status="tbd"]) > .cell {
      background-color: var(--wd-background-color);
      border-color: var(--wd-border-color-emphasis);
    }
    :host([status="correct"]) > .cell {
      background-color: var(--color-correct);
      color: var(--key-evaluated-text-color);
    }
    :host([status="present"]) > .cell {
      background-color: var(--color-present);
      color: var(--key-evaluated-text-color);
    }
    :host([status="absent"]) > .cell {
      background-color: var(--color-absent);
      color: var(--key-evaluated-text-color);
    }
    :host([animation="pop"]) > .cell {
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
    :host([animation="flip"]) > .cell {
      animation-name: Flip;
      animation-duration: 500ms;
      animation-delay: var(--animation-delay, 0ms);
      animation-timing-function: ease-in;
    }
    @keyframes Flip {
      0% {
        transform: rotateX(0);
      }
      50% {
        transform: rotateX(-90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }
  `;
__decorateClass$4([
  property({ reflect: true })
], Cwcell.prototype, "status", 2);
__decorateClass$4([
  property({ reflect: true })
], Cwcell.prototype, "animation", 2);
__decorateClass$4([
  property()
], Cwcell.prototype, "letter", 2);
Cwcell = __decorateClass$4([
  customElement("wd-cell")
], Cwcell);
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let CwRow = class extends LitElement {
  constructor() {
    super(...arguments);
    this.guess = initializeGuess.letters;
    this.result = initializeGuess.result;
    this.status = "idle";
    this.revealed = false;
  }
  updated() {
    if (!this.revealed && this.status === "reveal") {
      this.revealed = true;
    }
  }
  render() {
    let letters = this.guess.split("");
    letters = [
      ...letters,
      ...fill(() => "", WORD_SIZE - letters.length)
    ];
    const revealing = this.status === "reveal" && !this.revealed;
    return html`
      <div class="row">
        <wd-cell
          style="--transition-delay:${revealing ? "250ms" : "0ms"};"
          .letter=${letters[0]}
          .status=${this.status === "reveal" || this.revealed ? this.result[0] : letters[0] !== "" ? "tbd" : "empty"}
          .animation=${letters[0] !== "" ? revealing ? "flip" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:500ms;--transition-delay:${revealing ? "750ms" : "0ms"};"
          .letter=${letters[1]}
          .status=${this.status === "reveal" || this.revealed ? this.result[1] : letters[1] !== "" ? "tbd" : "empty"}
          .animation=${letters[1] !== "" ? revealing ? "flip" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:1000ms;--transition-delay:${revealing ? "1250ms" : "0ms"};"
          .letter=${letters[2]}
          .status=${this.status === "reveal" || this.revealed ? this.result[2] : letters[2] !== "" ? "tbd" : "empty"}
          .animation=${letters[2] !== "" ? this.status === "reveal" && !this.revealed ? "flip" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:1500ms;--transition-delay:${revealing ? "1750ms" : "0ms"};"
          .letter=${letters[3]}
          .status=${this.status === "reveal" || this.revealed ? this.result[3] : letters[3] !== "" ? "tbd" : "empty"}
          .animation=${letters[3] !== "" ? this.status === "reveal" && !this.revealed ? "flip" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:2000ms;--transition-delay:${revealing ? "2250ms" : "0ms"};"
          .letter=${letters[4]}
          .status=${this.status === "reveal" || this.revealed ? this.result[4] : letters[4] !== "" ? "tbd" : "empty"}
          .animation=${letters[4] !== "" ? this.status === "reveal" ? "flip" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
      </div>
    `;
  }
};
CwRow.styles = css`
    :host {
      display: block;
    }
    :host([status="invalid"]) {
      animation-name: Shake;
      animation-duration: ${INVALID_ANIMATION_DURATION}ms;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(${WORD_SIZE}, 1fr);
      grid-gap: 5px;
    }
    :host([status="win"]) {
      animation-name: Bounce;
      animation-duration: ${WIN_ANIMATION_DURATION}ms;
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
__decorateClass$3([
  property()
], CwRow.prototype, "guess", 2);
__decorateClass$3([
  property()
], CwRow.prototype, "result", 2);
__decorateClass$3([
  property({ reflect: true })
], CwRow.prototype, "status", 2);
CwRow = __decorateClass$3([
  customElement("wd-row")
], CwRow);
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let CwBoard = class extends LitElement {
  constructor() {
    super(...arguments);
    this.guess = 0;
    this.status = "idle";
    this.guesses = initializeGuesses;
  }
  render() {
    return html`
      <div class="board">
        <wd-row
          .guess=${this.guesses[0].letters}
          .result=${this.guesses[0].result}
          .status=${this.guess === 0 ? this.status : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[1].letters}
          .result=${this.guesses[1].result}
          .status=${this.guess === 1 ? this.status : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[2].letters}
          .result=${this.guesses[2].result}
          .status=${this.guess === 2 ? this.status : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[3].letters}
          .result=${this.guesses[3].result}
          .status=${this.guess === 3 ? this.status : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[4].letters}
          .result=${this.guesses[4].result}
          .status=${this.guess === 4 ? this.status : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[5].letters}
          .result=${this.guesses[5].result}
          .status=${this.guess === 5 ? this.status : void 0}
        ></wd-row>
      </div>
    `;
  }
};
CwBoard.styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      overflow: hidden;
      box-sizing: border-box;
      font-size: var(--wd-board-font-size);
      line-height: var(--wd-board-font-size);
    }
    .board {
      width: 10.9375em;
      height: 13.125em;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
  `;
__decorateClass$2([
  property()
], CwBoard.prototype, "guess", 2);
__decorateClass$2([
  property()
], CwBoard.prototype, "status", 2);
__decorateClass$2([
  property()
], CwBoard.prototype, "guesses", 2);
CwBoard = __decorateClass$2([
  customElement("wd-board")
], CwBoard);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let CwKeyboard = class extends LitElement {
  constructor() {
    super(...arguments);
    this.letters = letterKeyMap;
  }
  createRenderRoot() {
    const root = super.createRenderRoot();
    const dispatchKey = (e) => {
      var _a;
      e.preventDefault();
      const { key = "", state: state2 = "empty" } = ((_a = e == null ? void 0 : e.target) == null ? void 0 : _a.dataset) || {};
      if (state2 === "empty" && allowedKeyMap[key]) {
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
};
CwKeyboard.styles = css`
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
__decorateClass$1([
  property()
], CwKeyboard.prototype, "letters", 2);
CwKeyboard = __decorateClass$1([
  customElement("wd-keyboard")
], CwKeyboard);
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
let CwApp = class extends LitElement {
  constructor() {
    super(...arguments);
    this.guess = 0;
    this.guesses = initializeGuesses;
    this.letters = letterKeyMap;
    this.targetWord = "rowdy";
    this.status = "idle";
    this._clearStatus = null;
    this._handleKeydown = (e) => {
      if (e.isComposing || e.ctrlKey || e.altKey || this.status !== "idle")
        return;
      switch (e.key) {
        case "Backspace":
          return this.removeLetter();
        case "Enter":
          return this.attemptGuess();
        default:
          return this.insertLetter(e.key.toLowerCase());
      }
    };
  }
  get activeGuess() {
    return this.guesses[this.guess].letters;
  }
  set activeGuess(value) {
    const guess = this.guesses[this.guess];
    guess.letters = value;
    this.guesses = this.guesses.map((g, i) => {
      if (i === this.guess) {
        return guess;
      }
      return g;
    });
  }
  get activeResult() {
    return this.guesses[this.guess].result;
  }
  set activeResult(value) {
    const guess = this.guesses[this.guess];
    guess.result = value;
    this.guesses = this.guesses.map((g, i) => {
      if (i === this.guess) {
        return guess;
      }
      return g;
    });
  }
  removeLetter() {
    if (this.activeGuess.length > 0) {
      this.activeGuess = this.activeGuess.slice(0, -1);
    }
  }
  insertLetter(key) {
    if (this.activeGuess.length < WORD_SIZE && key in letterKeyMap) {
      this.activeGuess += key;
    }
  }
  win() {
    this.status = "win";
  }
  lose() {
    this.status = "lose";
  }
  nextRow() {
    this.guess++;
    this.status = "idle";
  }
  invalidGuess(_guess, reason) {
    this.status = "invalid";
    switch (reason) {
      case ValidationReason.INVALID_CHAR_LEN:
      case ValidationReason.INVALID_WORD:
    }
    this._clearStatus = setTimeout(() => {
      this.status = "idle";
    }, INVALID_ANIMATION_DURATION);
  }
  validate(guess) {
    if (guess.length < WORD_SIZE) {
      return {
        success: false,
        reason: ValidationReason.INVALID_CHAR_LEN
      };
    }
    return { success: true };
  }
  updateKeyboard() {
    const guess = this.activeGuess;
    const result = this.activeResult;
    const letters = {};
    for (let r = 0; r < result.length; r++) {
      letters[guess.charAt(r)] = result[r];
    }
    this.letters = __spreadValues(__spreadValues({}, this.letters), letters);
  }
  determineResults(guess) {
    const word = this.targetWord;
    const result = this.activeResult;
    this.status = "reveal";
    for (let c = 0; c < guess.length; c++) {
      const char = guess.charAt(c);
      const w = word.indexOf(char);
      result[c] = w === c ? "correct" : w > -1 ? "present" : "absent";
    }
    this.activeResult = result;
  }
  updateGameStatus() {
    this._clearStatus = setTimeout(() => {
      this.updateKeyboard();
      if (this.activeResult.some((r) => r !== "correct")) {
        if (this.guess < 5) {
          this.nextRow();
        } else {
          this.lose();
        }
      } else {
        this.win();
      }
    }, 5 * 500);
  }
  attemptGuess() {
    if (this._clearStatus)
      clearTimeout(this._clearStatus);
    const guess = this.activeGuess;
    const result = this.validate(guess);
    if (result.success) {
      this.determineResults(guess);
      this.updateGameStatus();
    } else {
      this.invalidGuess(guess, result.reason);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this._handleKeydown);
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this._handleKeydown);
    super.disconnectedCallback();
  }
  render() {
    return html`
      <wd-header></wd-header>
      <wd-board
        .guesses=${this.guesses}
        .guess=${this.guess}
        .status=${this.status}
      ></wd-board>
      <wd-keyboard .letters=${this.letters}></wd-keyboard>
    `;
  }
};
CwApp.styles = css`
    :host {
      width: 100%;
      max-width: var(--wd-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
  `;
__decorateClass([
  state()
], CwApp.prototype, "guess", 2);
__decorateClass([
  state()
], CwApp.prototype, "guesses", 2);
__decorateClass([
  state()
], CwApp.prototype, "letters", 2);
__decorateClass([
  state()
], CwApp.prototype, "targetWord", 2);
__decorateClass([
  state()
], CwApp.prototype, "status", 2);
CwApp = __decorateClass([
  customElement("wd-app")
], CwApp);
