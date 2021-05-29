import p from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { pgPool } from '../db/index.js';

p.use(new LocalStrategy(
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

p.serializeUser((user, done) => {
  const serializedUser = JSON.stringify({
    personId: user.personId,
    role: user.role,
  });
  done(null, serializedUser);
});

// deserializeUser does not run when users are unauthenticated (see setDefaultUser)
p.deserializeUser(async (serializedUser, done) => {
  const deserializedUser = JSON.parse(serializedUser);
  done(null, deserializedUser);
});

export const passport = p;

// setDefaultUser is a middleware that must run after passport.session()
export const setDefaultUser = (req, res, next) => {
  if(!req.session.populated) req.user = { personId: process.env.SESSION_DEFAULT_PERSON_ID, role: process.env.SESSION_DEFAULT_ROLE };
  req.user.role !== '' || req.baseUrl === '/' ? next() : res.status(401).end();
}
