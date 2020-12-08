const router = require('express').Router();
const passport = require('../middlewares/passport');

router.post(
  '/',
  passport.authenticate('local'),
  (req, res) => {
    if(req.user){
      // console.log(req.user)
      // let cookieContent = req.user.personId.toString() + '-' + req.user.role;
      // console.log(cookieContent)
      // res.cookie('cmms:user', cookieContent);
      res.json(req.user);
    }
  }
);

module.exports = router;
