import { GENERATE_ID_OPTS } from "./constants";

function pickRandomCharacter(chars: string) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  const randomChar = chars[randomIndex];

  return randomChar;
}

/**
 * Creates each user's ID.
 * @param length Max length of each ID. Defaults to `ID_MAX_LEN`
 * @param chars Character set to use to generate each id. Defaults to `ID_CHARS`.
 */
export function generateID(
  chars: string = GENERATE_ID_OPTS.chars,
  length: number = GENERATE_ID_OPTS.length
) {
  let id = "";
  let lastCharacter = "";

  for (let i = 0; i < length; i++) {
    let randomChar = pickRandomCharacter(chars);

    while (randomChar === lastCharacter) {
      randomChar = pickRandomCharacter(chars);
    }

    lastCharacter = randomChar;
    id += randomChar;
  }

  return id;
}
