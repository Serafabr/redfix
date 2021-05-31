import { Router } from 'express';
import { join } from 'path';
import paths from '../paths.js';

const router = Router();

router.get(
  '/',
  (req, res) => {
    // Frontend should use encodeURI() function to generate the URI for downloads (http://HOSTNAME:PORT/download?uuid=UUID&filename=FILENAME)
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    const { uuid, filename } = req.query;
    res.download(join(process.cwd(), paths.files, uuid), filename);
  }
);

export default router;
