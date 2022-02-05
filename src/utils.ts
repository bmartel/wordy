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
export interface Guess {
  letters: string;
  result: [GuessResult, GuessResult, GuessResult, GuessResult, GuessResult];
}
export const WORD_SIZE = 5;
export const GUESS_SIZE = 6;
export const fill = (func: () => any, length = 0) =>
  Array.from({ length }, func);
export const makeGuessResult = () => fill(() => "", WORD_SIZE);
export const makeGuesses = (letters = "", result = makeGuessResult()) =>
  fill(() => ({ letters, result }), GUESS_SIZE);

export const initializeGuesses = makeGuesses();
