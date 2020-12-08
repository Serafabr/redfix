const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { pgPool } = require('../db');

passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  async function(username, password, done){
    try {
      const data = await pgPool.query('select web.authenticate($1, $2)', [username, password]);
      if (data.rows.length === 0) {
        return done(null, false); // Login failed (incorrect username or password)
      }
      const user = data.rows[0].authenticate;
      return done(null, user); // Login successful, passportjs will populate req.user in /login route
    } catch (error) {
      return done(error); // Login failed (database connection problem)
    }
  }
));

passport.serializeUser((user, done) => {
  const serializedUser = `${user.personId.toString()}-${user.role}`; // See cmms-session middleware
  done(null, serializedUser);
});

// deserializeUser does not run for unauthenticated user, therefore, cmms-session middleware
// is necessary to populate req.cmmsSession with visitor's data
passport.deserializeUser(async (serializedUser, done) => {
  done(null, serializedUser);
});

module.exports = passport;
