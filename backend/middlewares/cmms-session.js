// Middleware to populate req.cmmsSession with
// personId and role of the user (authenticated or not)
module.exports =  (req, res, next) => {
  const { SESSION_DEFAULT_PERSON_ID, SESSION_DEFAULT_ROLE } = process.env;
  const [ personId, role ] = req.session.populated ? req.session.passport.user.split('-') : [ SESSION_DEFAULT_PERSON_ID, SESSION_DEFAULT_ROLE ];
  req.cmmsSession = { personId, role };
  role !== '' ? next() : res.status(401).end();
}
