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

export const WORD_SIZE = 5;
export const GUESS_SIZE = 6;
export const INVALID_ANIMATION_DURATION = 600;
export const WIN_ANIMATION_DURATION = 1000;

export type LetterKey = keyof typeof letterKeyMap;
export type AllowedKey = keyof typeof allowedKeyMap;
export type GuessResult = "correct" | "present" | "absent";
export type LetterKeyResult = "empty" | "tbd" | GuessResult;
export type LetterKeyResultMap = Record<LetterKey, LetterKeyResult>;
export type cellStatus = "empty" | "tbd" | GuessResult;
export type GameStatus = "idle" | "invalid" | "reveal" | "win" | "lose";
export interface Guess {
  letters: string;
  result: [GuessResult, GuessResult, GuessResult, GuessResult, GuessResult];
}
export const GuessResultSymbols: Record<GuessResult, string> = {
  absent: "🟦",
  present: "🟨",
  correct: "🟩",
};
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
    () => ({ letters, result: result || [...makeGuessResult()] }),
    GUESS_SIZE
  );

export const initializeGuesses = makeGuesses();
export const initializeGuess = initializeGuesses[0];

const RANDOM_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const RANDOM_CHARS_LEN = RANDOM_CHARS.length;
export const random = (length = 8) => {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += RANDOM_CHARS.charAt(Math.floor(Math.random() * RANDOM_CHARS_LEN));
  }
  return str;
};

export const IS_TOUCH_DEVICE =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  (navigator as any).msMaxTouchPoints > 0;
