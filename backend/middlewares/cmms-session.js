// Middleware to set personId and role of unauthenticated users
module.exports =  (req, res, next) => {
  const { SESSION_DEFAULT_PERSON_ID, SESSION_DEFAULT_ROLE } = process.env;
  const { personId, role } = req.session.populated ? req.session.passport.user : { personId: SESSION_DEFAULT_PERSON_ID, role: SESSION_DEFAULT_ROLE };
  req.cmmsSession = { personId, role };
  role !== '' ? next() : res.status(401).end();
}
