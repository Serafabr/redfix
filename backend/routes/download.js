import { Router } from 'express';
import { join } from 'path';
import paths from '../paths.js';

const router = Router();

router.get(
  '/',
  (req, res) => {
    // URI for downloads: http://localhost:3001/download/?uuid=UUID&filename=FILENAME
    // Frontend should use encodeURI() function
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    const { uuid, filename } = req.query; // See: http://expressjs.com/en/4x/api.html#req.query
    res.download(join(process.cwd(), paths.files, uuid), filename);
  }
);

export default router;
