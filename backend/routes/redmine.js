import { Router } from 'express';
import got from 'got';

const router = Router();

router.get(
  '/',
  async (req, res, next) => {
    const { page } = req.query;
    const { body } = await got.get(
      `${process.env.REDMINE_URL}${page}`,
      { headers: { "X-Redmine-API-Key": process.env.REDMINE_API_KEY } },
    );
    res.json(body);
  }
);

export default router;
