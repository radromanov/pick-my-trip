import { OAuth2Client } from "google-auth-library";
import { GENERATE_ID_OPTS } from "./constants";

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

  function pickRandomCharacter(charSet: string = chars) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    const randomChar = charSet[randomIndex];

    return randomChar;
  }

  for (let i = 0; i < length; i++) {
    let randomChar = pickRandomCharacter();

    while (randomChar === lastCharacter) {
      randomChar = pickRandomCharacter();
    }

    lastCharacter = randomChar;
    id += randomChar;
  }

  return id;
}

export function setAuthMessage(path: string) {
  switch (path) {
    case "/auth/sign-in":
      return {
        text: "No account yet?",
        link: "Create account",
        to: "/auth/sign-up",
        linkIsColored: true,
      };
    case "/auth/sign-up":
      return {
        text: "Already have an account?",
        link: "Sign in",
        to: "/auth/sign-in",
        linkIsColored: true,
      };
  }
}

export function initOAuth() {
  const googleOAuth = new OAuth2Client({
    clientId: process.env.NEXT_PUBLIC_OAUTH_GOOGLE_CLIENT_ID,
    clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_OAUTH_GOOGLE_REDIRECT_URI,
  });

  return { googleOAuth };
}

export async function getGoogleUser(accessToken: string) {
  // Repurpose this to decode a jwt token?

  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token${accessToken}`
  );
  const data = await response.json();

  return data;
}
