import localForage from "localforage";
import { nanoid } from "nanoid";
import { encrypt } from ".";
import { config } from "./config";
import { createRandomSeed, createRandom, maybeEncryptSolution } from "./crypto";
import { makeGuesses } from "./seed";
import {
  Game,
  GameManager,
  GameStats,
  setWordListSize,
  letterKeyMap,
  LetterKeyResultMap,
  RandomWord,
  WORD_LIST_SIZE,
} from "./types";

export const store = localForage.createInstance({
  name: "wordy",
});

export const pickRandomWord = async (seed?: string): Promise<RandomWord> => {
  const { words } = config;
  seed = seed || createRandomSeed();
  if (!WORD_LIST_SIZE) {
    setWordListSize(words.length);
  }
  const random = createRandom(seed);
  return { word: words[Math.floor(random() * WORD_LIST_SIZE)], seed };
};
export const isValidWord = async (word: string) => {
  const { words } = config;
  return words.indexOf(word) > -1;
};
export const newGame = async (): Promise<Game> => {
  const { word, seed } = await pickRandomWord();
  const [iv, solution] = await encrypt(word);
  return {
    id: nanoid(),
    guess: 0,
    guesses: makeGuesses(),
    solution,
    iv,
    seed,
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
    active = {
      ...games[data.id!],
      ...data,
    };

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
