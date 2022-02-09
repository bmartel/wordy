import { GUESS_SIZE, WORD_SIZE } from "./types";

// Helper for filling arrays with a uniform baseline dataset
export const fill = (func: () => any, length = 0) =>
  Array.from({ length }, func);

// Seed functions
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
