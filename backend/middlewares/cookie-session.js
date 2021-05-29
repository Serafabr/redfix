import cs from 'cookie-session';

const {
  COOKIE_NAME,
  COOKIE_KEY_0,
  COOKIE_KEY_1,
  COOKIE_KEY_2,
  COOKIE_SECURE,
  COOKIE_HTTP_ONLY,
  COOKIE_SIGNED,
  COOKIE_OVERWRITE,
  COOKIE_DOMAIN,
  COOKIE_PATH,
  COOKIE_SAME_SITE,
  COOKIE_MAX_AGE,
} = process.env;

export const cookieSession = cs({
  name: COOKIE_NAME,
  keys: [
    COOKIE_KEY_0,
    COOKIE_KEY_1,
    COOKIE_KEY_2,
  ],
});

export const sessionOptions = {
  secure: COOKIE_SECURE === '1',
  httpOnly: COOKIE_HTTP_ONLY === '1',
  signed: COOKIE_SIGNED === '1',
  overwrite: COOKIE_OVERWRITE === '1',
  domain: COOKIE_DOMAIN,
  path: COOKIE_PATH,
  sameSite: COOKIE_SAME_SITE,
  maxAge: parseInt(COOKIE_MAX_AGE, 10),
};
