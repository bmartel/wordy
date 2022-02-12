import localForage from "localforage";
import { encrypt, GUESS_SIZE, TARGET_DURATION } from ".";
import { config } from "./config";
import { createRandomSeed, createRandom, maybeEncryptSolution } from "./crypto";
import { makeGuesses } from "./seed";
import {
  Game,
  GameManager,
  GameStats,
  letterKeyMap,
  LetterKeyResultMap,
  RandomWord,
} from "./types";

export const store = localForage.createInstance({
  name: "wordy",
});

export let WORD_LIST_SIZE = 0;
export const pickRandomWord = async (seed?: string): Promise<RandomWord> => {
  const { words } = config;
  seed = seed || createRandomSeed();
  if (!WORD_LIST_SIZE) {
    WORD_LIST_SIZE = words.length;
  }
  const random = createRandom(seed);
  return { word: words[Math.floor(random() * WORD_LIST_SIZE)], seed };
};
export const isValidWord = async (word: string) => {
  const { words } = config;
  return words.indexOf(word) > -1;
};
export const newGame = async (seed?: string): Promise<Game> => {
  const { word, seed: genSeed } = await pickRandomWord(seed);
  const [iv, solution] = await encrypt(word);
  return {
    id: genSeed, // to make lookups effective against people trying to replay the same game over and over
    guess: 0,
    guesses: makeGuesses(),
    solution,
    iv,
    seed: genSeed,
    letters: letterKeyMap as LetterKeyResultMap,
    status: "idle",
  };
};
export const manager = (async (): Promise<GameManager> => {
  const seed = new URLSearchParams(location.search).get("seed") || undefined;
  const activeGameId = await store.getItem("activeGameId");
  let games = ((await store.getItem("games")) || {}) as Record<string, Game>; // should be a list of historical and active games
  const gameInProgress = !!(
    activeGameId && !games?.[activeGameId as string]?.end
  );
  const seedPlayedPreviously = !!(seed && seed in games && games[seed]?.end);
  const canLoadSeed = !seedPlayedPreviously && !gameInProgress;
  let stats = ((await store.getItem("stats")) || {}) as GameStats;
  let active = (
    gameInProgress
      ? games[activeGameId as string]
      : await newGame(seedPlayedPreviously ? undefined : seed)
  ) as Game;
  const modal =
    stats.lastGameId === activeGameId
      ? "stats"
      : (await store.getItem("shown_help"))
      ? seed && gameInProgress
        ? "game-in-progress"
        : seed && seedPlayedPreviously
        ? "seed-played"
        : ""
      : "help";

  if (modal === "help") {
    await store.setItem("shown_help", "1");
  }
  // consume seed
  if (seed) {
    const url = new URL(window.location.href);
    url.searchParams.delete("seed");
    history.pushState({ path: url.href }, "", url.href); // clear query params of seed
  }

  const saveGame = async (data: Partial<Game>, start = true) => {
    active = {
      ...games[data.id!],
      ...data,
    };

    if (start && !active.start) {
      active.start = Date.now();
    }
    // encrypt for storage to prevent the temptation of looking in devtools
    // making this a bit more roundabout to prevent even myself from being tempted to cheat :)
    const solutionText = games[data.id!]?.solution || active.solution;
    const solutionIV = games[data.id!]?.iv || active.iv;
    const [iv, solution] = await maybeEncryptSolution(solutionText, solutionIV);

    games[data.id!] = {
      ...active,
      solution,
      iv,
    };

    await store.setItem("games", games);
  };

  const rating = (
    maxStreak: number,
    avgGuess: number,
    avgDuration: number,
    winRatio: number
  ): number => {
    const accuracyFactor = avgGuess - GUESS_SIZE / GUESS_SIZE;
    const guessStrength =
      (maxStreak - maxStreak * accuracyFactor) * winRatio * 100;
    return guessStrength * ((TARGET_DURATION - avgDuration) / TARGET_DURATION);
  };

  const saveStats = async (gameId: string) => {
    const game = games[gameId];
    const distribution = stats.distribution || {};
    const avgGuess = (game.guess + (stats.avgGuess || 0)) / 2;
    const streak = game.status === "win" ? (stats.streak || 0) + 1 : 0;
    const maxStreak = Math.max(streak, stats.maxStreak || 0);
    const wins = (stats.wins || 0) + (game.status === "win" ? 1 : 0);
    const losses = (stats.losses || 0) + (game.status === "lose" ? 1 : 0);
    const winRatio = wins / (wins + losses);
    const duration = (game.end || 0) - (game.start || 0);
    const avgDuration = (duration + (stats.avgDuration || 0)) / 2;
    stats = {
      streak,
      lastResult: game.status === "win" ? "win" : "lose",
      lastGameId: game.id,
      lastGuess: game.guess,
      avgGuess,
      avgDuration,
      maxStreak,
      wins,
      losses,
      rating: rating(maxStreak, avgGuess, avgDuration, winRatio),
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
  if (!activeGameId || canLoadSeed) {
    await store.setItem("activeGameId", active.id);
    await saveGame(active, false);
  }

  const generateGame = async (): Promise<Game> => {
    const game = await newGame();
    await store.setItem("activeGameId", game.id);
    await saveGame(game, false);
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
