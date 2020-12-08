const fs = require('fs');
const path = require('path');
const paths = require('../paths');

const cronWritableStream = fs.createWriteStream(
  path.join(process.cwd(), paths.cronLog),
  { flags: 'a' }
);

module.exports = cronWritableStream;
