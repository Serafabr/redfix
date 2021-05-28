const router = require('express').Router();
const { passport } = require('../middlewares/passport');
const { sessionOptions } = require('../middlewares/cookie-session');

router.post(
  '/',
  passport.authenticate('local'),
  (req, res) => {
    req.sessionOptions = sessionOptions;
    res.json(req.user);
  }
);

module.exports = router;
