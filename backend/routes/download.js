const express = require('express');
const router = express.Router();
const paths = require('../paths');
const path = require('path');

router.get(
  '/',
  (req, res, next) => {
  
    /*
      Frontend links for the downloads will be in the format
      http://localhost:3001/download/?uuid=...&filename=...
      and therefore must be URI encoded
      (to handle spaces and other special characters in the filename)
      See:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    */

    // console.log(req.query);

    const { uuid, filename } = req.query;

    res.download(
      path.join(
        process.cwd(),
        paths.files,
        uuid
      ),
      filename
    )
  }
);

module.exports = router;
