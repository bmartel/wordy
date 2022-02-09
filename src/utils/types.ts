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
export const setWordListSize = (size: number) => {
  WORD_LIST_SIZE = size;
};
export const WORD_SIZE = 5;
export const GUESS_SIZE = 6;
export const INVALID_ANIMATION_DURATION = 600;
export const WIN_ANIMATION_DURATION = 750;
export interface RandomWord {
  word: string;
  seed: string;
}
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
  solution: string | Uint8Array;
  iv: Uint8Array;
  seed: string;
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
export const GuessResultSymbols: Record<GuessResult | "empty", string> = {
  empty: "⬛",
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
