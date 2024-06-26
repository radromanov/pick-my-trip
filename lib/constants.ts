export const HEADER_HEIGHT = 40;
export const FOOTER_HEIGHT = 40;

export const ID_CHARS =
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789-_~";
export const ID_MAX_LEN = 16;
export const GENERATE_ID_OPTS = {
  chars: ID_CHARS,
  length: ID_MAX_LEN,
} as const;

export const USERNAME_MIN_LEN = 3;
export const USERNAME_MAX_LEN = 32;
export const PASSWORD_MIN_LEN = 8;
export const PASSWORD_MAX_LEN = 32;

export const ErrorTypes = {
  "Bad Request": 400,
  Unauthorized: 401,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  Conflict: 409,
  "Unprocessable Entity": 422,
  "Internal Server Error": 500,
} as const;

export const GoogleOAuthScopes = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
  "openid",
];
