const router = require('express').Router();

router.get(
  '/',
  (req, res) => {
    req.loggedOutUser = req.user; // avoids error when logging (see morgan middleware)
    req.logout();
    req.session = null;
    res.status(401).end();
  }
);

module.exports = router;
