const router = require('express').Router();
const { graphqlUpload, callback } = require('../middlewares/graphql-upload');

router.post(
  '/',
  graphqlUpload,
  callback
);

module.exports = router;
