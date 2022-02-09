import { Toast } from "./toast";
import { Guess, GuessResultSymbols } from "./types";

export const createShareableResult = (guesses: Guess[]): string => {
  return guesses
    .map((guess) =>
      guess.result.map((result) => GuessResultSymbols[result]).join("")
    )
    .join("\n");
};

export const share = async (content: string) => {
  try {
    if (navigator.share) {
      await navigator.share({
        text: content,
      });
      Toast("Shared puzzle result");
    } else {
      navigator.clipboard.writeText(content);
      Toast("Copied puzzle result");
    }
  } catch (err: any) {
    Toast(err.message);
  }
};
