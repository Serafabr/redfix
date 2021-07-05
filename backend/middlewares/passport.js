import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { pgPool } from '../db/index.js';

passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  async function(username, password, done){
    try {
      const { rows: [ { user } ] } = await pgPool.query('select web.authenticate($1, $2) as user', [username, password]);
      if (!user) {
        return done(null, false); // Login failed (incorrect username or password)
      }
      return done(null, user); // Login successful, passportjs will populate req.user in /login route
    } catch (error) {
      return done(error); // Login failed (database connection problem)
    }
  }
));

passport.serializeUser((user, done) => {
  const serializedUser = JSON.stringify({
    personId: user.personId,
    role: user.role,
  });
  done(null, serializedUser);
});

// deserializeUser does not run when users are unauthenticated (see setDefaultUser)
passport.deserializeUser(async (serializedUser, done) => {
  const deserializedUser = JSON.parse(serializedUser);
  done(null, deserializedUser);
});

export default passport;

// setDefaultUser is a middleware that must run after passport.session()
export const setDefaultUser = (req, res, next) => {
  if(!req.session.populated) req.user = { personId: process.env.SESSION_DEFAULT_PERSON_ID, role: process.env.SESSION_DEFAULT_ROLE };
  req.user.role !== '' || req.baseUrl === '/' ? next() : res.status(401).end();
};
