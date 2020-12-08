// Middleware to populate req.cmmsSession with
// personId and role of the user (authenticated or not)
module.exports =  (req, res, next) => {
  let personId, role;
  if(process.env.SESSION_SOURCE === 'cookie'){
    [personId, role] = req.session.populated ? req.session.passport.user.split('-') : [process.env.SESSION_VISITOR_PERSON_ID, process.env.SESSION_VISITOR_ROLE];
  } else {
    [personId, role] = [process.env.SESSION_DEFAULT_PERSON_ID, process.env.SESSION_DEFAULT_ROLE];
  }
  req.cmmsSession = { personId, role };
  next();
}
