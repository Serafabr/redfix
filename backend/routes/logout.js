import { Router } from 'express';

const router = Router();

router.get(
  '/',
  (req, res) => {
    req.loggedOutUser = req.user; // avoids error when logging (see morgan middleware)
    req.logout();
    req.session = null;
    res.status(401).end();
  }
);

export default router;
