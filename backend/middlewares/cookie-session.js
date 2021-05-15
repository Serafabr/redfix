const cookieSession = require('cookie-session');

module.exports = cookieSession({
  name: process.env.COOKIE_NAME,
  keys: [
    process.env.COOKIE_KEY_0,
    process.env.COOKIE_KEY_1,
    process.env.COOKIE_KEY_2,
  ],
});
