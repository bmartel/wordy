const configPromise = import("../config.json");

let config: { words: string[] } = {} as any;
(async () => {
  config = (await configPromise) as { words: string[] };
})();

export { config };
