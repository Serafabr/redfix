// Middleware to set personId and role of unauthenticated users
module.exports =  (req, res, next) => {
  if(!req.session.populated) req.user = { personId: process.env.SESSION_DEFAULT_PERSON_ID, role: process.env.SESSION_DEFAULT_ROLE };
  console.log(req.get('set-cookie'))
  req.user.role !== '' || req.baseUrl === '/' ? next() : res.status(401).end();
}
