const cookieSession = require('cookie-session');

const {
  COOKIE_NAME,
  COOKIE_KEY_0,
  COOKIE_KEY_1,
  COOKIE_KEY_2,
  COOKIE_PATH,
  COOKIE_SECURE,
  COOKIE_HTTP_ONLY,
  COOKIE_SIGNED,
  COOKIE_OVERWRITE,
  COOKIE_DOMAIN,
  COOKIE_SAME_SITE,
} = process.env;

module.exports = {
  cookieSession: cookieSession({
    name: COOKIE_NAME,
    keys: [
      COOKIE_KEY_0,
      COOKIE_KEY_1,
      COOKIE_KEY_2,
    ],
  }),
  sessionOptions: {
    path: COOKIE_PATH,
    secure: COOKIE_SECURE === '1',
    httpOnly: COOKIE_HTTP_ONLY === '1',
    signed: COOKIE_SIGNED === '1',
    overwrite: COOKIE_OVERWRITE === '1',
    // domain: process.env.COOKIE_DOMAIN,
    // sameSite: process.env.COOKIE_SAME_SITE,
  }
};
