const router = require('express').Router();

router.get(
  '/',
  (req, res) => {
    req.logout();
    req.session = null;
    res.status(401).end();
  }
);

module.exports = router;
