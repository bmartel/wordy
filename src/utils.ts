import localForage from "localforage";
import { nanoid } from "nanoid";

const config = import("./config.json");

export const store = localForage.createInstance({
  name: "wordy",
});

export const letterKeyMap = {
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
  m: "empty",
};

export const controlKeyMap = {
  Enter: true,
  Backspace: true,
};
export const allowedKeyMap = {
  ...letterKeyMap,
  ...controlKeyMap,
};

export let WORD_LIST_SIZE = 0;
export const WORD_SIZE = 5;
export const GUESS_SIZE = 6;
export const INVALID_ANIMATION_DURATION = 600;
export const WIN_ANIMATION_DURATION = 750;

export type LetterKey = keyof typeof letterKeyMap;
export type AllowedKey = keyof typeof allowedKeyMap;
export type GuessResult = "correct" | "present" | "absent";
export type LetterKeyResult = "empty" | "tbd" | GuessResult;
export type LetterKeyResultMap = Record<LetterKey, LetterKeyResult>;
export type CellStatus = "empty" | "tbd" | GuessResult;
export type RowStatus = "tbd" | "evaluated";
export type GameStatus = "idle" | "invalid" | "reveal" | "win" | "lose";
export interface Guess {
  letters: string;
  status: RowStatus;
  result: [GuessResult, GuessResult, GuessResult, GuessResult, GuessResult];
}
export interface Game {
  id: string;
  guess: number;
  guesses: Guess[];
  status: GameStatus;
  solution: string;
  letters: LetterKeyResultMap;
  start: number;
  end?: number;
}
export interface GuessDistribution {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}
export interface GameStats {
  lastResult?: "win" | "lose";
  lastGameId?: string;
  lastGuess?: number;
  wins: number;
  losses: number;
  streak: number;
  maxStreak: number;
  distribution: GuessDistribution;
}
export const GuessResultSymbols: Record<GuessResult, string> = {
  absent: "🟦",
  present: "🟨",
  correct: "🟩",
};
export interface GameManager {
  active(): Game;
  games(): Record<string, Game>;
  stats(): GameStats;
  saveGame(game: Partial<Game>): Promise<void>;
  saveStats(id: string): Promise<void>;
  generateGame(): Promise<Game>;
  modal: "" | "help";
}
export enum ValidationReason {
  INVALID_CHAR_LEN,
  INVALID_WORD,
}
export type ValidationResult = {
  success: boolean;
  reason?: ValidationReason;
};
export const fill = (func: () => any, length = 0) =>
  Array.from({ length }, func);

// seed functions
export const makeGuessResult = () => fill(() => "empty", WORD_SIZE);
export const makeGuesses = (letters = "", result = undefined) =>
  fill(
    () => ({
      letters,
      status: "tbd",
      result: result || [...makeGuessResult()],
    }),
    GUESS_SIZE
  );

export const initializeGuesses = makeGuesses();
export const initializeGuess = initializeGuesses[0];

export const pickRandomWord = async () => {
  const { words } = await config;
  if (!WORD_LIST_SIZE) {
    WORD_LIST_SIZE = words.length;
  }
  return words[Math.floor(Math.random() * WORD_LIST_SIZE)];
};
export const isValidWord = async (word: string) => {
  const { words } = await config;
  return words.indexOf(word) > -1;
};
export const newGame = async (): Promise<Game> => {
  return {
    id: nanoid(),
    guess: 0,
    guesses: makeGuesses(),
    solution: await pickRandomWord(),
    letters: letterKeyMap as LetterKeyResultMap,
    status: "idle",
    start: Date.now(),
  };
};
export const manager = (async (): Promise<GameManager> => {
  const activeGameId = await store.getItem("activeGameId");
  let games = ((await store.getItem("games")) || {}) as Record<string, Game>; // should be a list of historical and active games
  let stats = ((await store.getItem("stats")) || {}) as GameStats;
  let active = ((activeGameId && games[activeGameId as string]) ||
    (await newGame())) as Game;
  const modal =
    stats.lastGameId === activeGameId
      ? "stats"
      : (await store.getItem("shown_help"))
      ? ""
      : "help";
  if (modal === "help") {
    await store.setItem("shown_help", "1");
  }
  if (!activeGameId) {
    await store.setItem("activeGameId", active.id);
  }
  const saveGame = async (data: Partial<Game>) => {
    active = { ...games[data.id!], ...data };
    games[data.id!] = active;
    await store.setItem("games", games);
  };
  const saveStats = async (gameId: string) => {
    const game = games[gameId];
    const distribution = stats.distribution || {};
    const streak = game.status === "win" ? (stats.streak || 0) + 1 : 0;
    const maxStreak = stats.maxStreak || 0;
    const wins = (stats.wins || 0) + (game.status === "win" ? 1 : 0);
    const losses = (stats.losses || 0) + (game.status === "lose" ? 1 : 0);
    stats = {
      streak,
      lastResult: game.status === "win" ? "win" : "lose",
      lastGameId: game.id,
      lastGuess: game.guess,
      maxStreak: Math.max(streak, maxStreak),
      wins,
      losses,
      distribution: {
        0:
          (distribution[0] || 0) +
          (game.status === "win" && game.guess === 0 ? 1 : 0),
        1:
          (distribution[1] || 0) +
          (game.status === "win" && game.guess === 1 ? 1 : 0),
        2:
          (distribution[2] || 0) +
          (game.status === "win" && game.guess === 2 ? 1 : 0),
        3:
          (distribution[3] || 0) +
          (game.status === "win" && game.guess === 3 ? 1 : 0),
        4:
          (distribution[4] || 0) +
          (game.status === "win" && game.guess === 4 ? 1 : 0),
        5:
          (distribution[5] || 0) +
          (game.status === "win" && game.guess === 5 ? 1 : 0),
      },
    };
    await store.setItem("stats", stats);
  };
  if (!activeGameId) {
    await store.setItem("activeGameId", active.id);
    await saveGame(active);
  }

  const generateGame = async (): Promise<Game> => {
    const game = await newGame();
    await store.setItem("activeGameId", game.id);
    await saveGame(game);
    return game;
  };

  return {
    games: () => games,
    active: () => active,
    stats: () => stats,
    modal: modal as any,
    saveGame,
    saveStats,
    generateGame,
  };
})();
export const IS_TOUCH_DEVICE =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  (navigator as any).msMaxTouchPoints > 0;

let Toaster: HTMLElement | null = null;

export const initToaster = (node: HTMLElement) => {
  Toaster = node;
};
export const removeToaster = () => {
  Toaster = null;
};
const createToast = (text: string) => {
  const node = document.createElement("output");

  node.innerText = text;
  node.classList.add("toast");
  node.setAttribute("role", "status");

  return node;
};
const flipToast = (toast: HTMLElement) => {
  const first = Toaster?.offsetHeight || 0;

  Toaster?.appendChild(toast);

  const last = Toaster?.offsetHeight || 0;
  const invert = last - first;

  Toaster?.animate(
    [{ transform: `translateY(${invert}px)` }, { transform: "translateY(0)" }],
    {
      duration: 150,
      easing: "ease-out",
    }
  );
};
const addToast = (toast: HTMLElement) => {
  const { matches: motionOK } = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );

  Toaster?.children.length && motionOK
    ? flipToast(toast)
    : Toaster?.appendChild(toast);
};
export const Toast = (text: string) => {
  const toast = createToast(text);
  addToast(toast);

  return new Promise<void>(async (resolve) => {
    await Promise.allSettled(
      toast.getAnimations().map((animation) => animation.finished)
    );
    Toaster?.removeChild(toast);
    resolve();
  });
};
