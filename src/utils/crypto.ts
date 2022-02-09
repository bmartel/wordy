import { nanoid } from "nanoid";

function sfc32(a: number, b: number, c: number, d: number) {
  return function () {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}

function xmur3(str: string) {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}
// NOTE: this is not used for any secure means, this is just to deterministically obfuscate values in indexeddb to prevent temptation of cheating.
// Please do not use this for security purposes. You have been warned!
const r = {
  alg: "A256GCM",
  ext: true,
  k: "6KWvelTztanQl8-rJ1a1f2B_VcuIZDIrjBsoUiOY-sc",
  key_ops: ["encrypt", "decrypt"],
  kty: "oct",
};
let k: CryptoKey | null = null;
(async () => {
  if (!k) {
    k = await crypto.subtle.importKey("jwk", r, "AES-GCM", true, [
      "encrypt",
      "decrypt",
    ]);
  }
})();
export const encodeText = (text: string) => new TextEncoder().encode(text);
export const decodeText = (input: Uint8Array) =>
  new TextDecoder().decode(input);
export const encrypt = async (
  text: string
): Promise<[Uint8Array, Uint8Array]> => {
  const encoded = encodeText(text);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const enc = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    k!,
    encoded
  );
  return [iv, enc];
};
export const decrypt = async (
  encrypted: Uint8Array,
  iv: Uint8Array
): Promise<string> => {
  if (!iv || !encrypted) return "";

  const buf = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv,
    },
    k!,
    encrypted
  );

  return decodeText(new Uint8Array(buf));
};
export const maybeDecryptSolution = async (
  solutionText: string | Uint8Array,
  solutionIV: Uint8Array
): Promise<string> => {
  if (typeof solutionText === "string") {
    return solutionText;
  }
  return await decrypt(solutionText, solutionIV);
};
export const maybeEncryptSolution = async (
  solutionText: string | Uint8Array,
  solutionIV?: Uint8Array
): Promise<[Uint8Array, Uint8Array]> => {
  if (typeof solutionText === "string") {
    return await encrypt(solutionText);
  }
  return [solutionIV || new Uint8Array(12), solutionText];
};
export const createRandomSeed = () => nanoid();
export const createRandom = (seed: string) => {
  const seeder = xmur3(seed);
  return sfc32(seeder(), seeder(), seeder(), seeder());
};
