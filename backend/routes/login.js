const router = require('express').Router();
const passport = require('../middlewares/passport');

router.post(
  '/',
  passport.authenticate('local'),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
