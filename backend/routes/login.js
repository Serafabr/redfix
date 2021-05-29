import { Router } from 'express';
import { passport } from '../middlewares/passport.js';
import { sessionOptions } from '../middlewares/cookie-session.js';

const router = Router();

router.post(
  '/',
  passport.authenticate('local'),
  (req, res) => {
    req.sessionOptions = sessionOptions;
    res.json(req.user);
  }
);

export default router;
