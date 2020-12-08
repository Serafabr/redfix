const cookieSession = require('cookie-session');

module.exports = cookieSession({
  name: process.env.COOKIE_NAME,
  keys: [
    process.env.COOKIE_KEY_0,
    process.env.COOKIE_KEY_1,
    process.env.COOKIE_KEY_2,
  ],
  maxAge: Number(process.env.COOKIE_MAX_AGE),
  path: '/',
  domain: process.env.NODE_ENV === 'production' ? 'senado.gov.br' : 'localhost',
  secure: false,
  httpOnly: true,
  signed: true,
  overwrite: true,
});
