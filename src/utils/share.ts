import { Toast } from "./toast";
import { Guess, GuessResultSymbols } from "./types";

export const createShareableResult = (guesses: Guess[]): string => {
  return guesses
    .map((guess) =>
      guess.result.map((result) => GuessResultSymbols[result]).join("")
    )
    .join("\n");
};

export const share = async (content: string, seed: string) => {
  const url = new URL(location.href);
  url.searchParams.set("seed", seed);
  try {
    if (navigator.share) {
      await navigator.share({
        url: url.toString(),
        title: `Puzzle ${seed}`,
        text: content,
      });
      Toast("Shared puzzle result");
    } else {
      content = `
${url.toString()}

${content}
    `;
      await navigator.clipboard.writeText(content);
      Toast("Copied puzzle result");
    }
  } catch (err: any) {
    Toast(err.message);
  }
};
