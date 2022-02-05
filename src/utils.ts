export const letterKeyMap = {
  q: true,
  w: true,
  e: true,
  r: true,
  t: true,
  y: true,
  u: true,
  i: true,
  o: true,
  p: true,

  a: true,
  s: true,
  d: true,
  f: true,
  g: true,
  h: true,
  j: true,
  k: true,
  l: true,

  z: true,
  x: true,
  c: true,
  v: true,
  b: true,
  n: true,
  m: true,
};
export const controlKeyMap = {
  Enter: true,
  Backspace: true,
};
export const allowedKeyMap = {
  ...letterKeyMap,
  ...controlKeyMap,
};

export type LetterKey = keyof typeof letterKeyMap;
export type AllowedKey = keyof typeof allowedKeyMap;
export type GuessResult = "correct" | "present" | "absent";
export type TileStatus = "empty" | "tbd" | GuessResult;
export type GameStatus = "idle" | "invalid" | "reveal" | "win" | "lose";
export interface Guess {
  letters: string;
  result: [GuessResult, GuessResult, GuessResult, GuessResult, GuessResult];
}
export const WORD_SIZE = 5;
export const GUESS_SIZE = 6;
export const fill = (func: () => any, length = 0) =>
  Array.from({ length }, func);
export const makeGuessResult = () => fill(() => "empty", WORD_SIZE);
export const makeGuesses = (letters = "", result = undefined) =>
  fill(
    () => ({ letters, result: result || [...makeGuessResult()] }),
    GUESS_SIZE
  );

export const initializeGuesses = makeGuesses();
export const initializeGuess = initializeGuesses[0];

// Declare all characters
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

export const INVALID_ANIMATION_DURATION = 600;
export const WIN_ANIMATION_DURATION = 1000;
