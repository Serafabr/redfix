const router = require('express').Router();
const passport = require('../middlewares/passport');

router.post(
  '/',
  passport.authenticate('local'),
  (req, res) => {
    req.sessionOptions = {
      maxAge: Number(process.env.COOKIE_MAX_AGE),
      path: '/',
      // domain: process.env.COOKIE_DOMAIN,
      secure: false,
      httpOnly: true,
      signed: true,
      overwrite: true,
      // sameSite: process.env.COOKIE_SAME_SITE,
    };
    res.json(req.user);
  }
);

module.exports = router;
