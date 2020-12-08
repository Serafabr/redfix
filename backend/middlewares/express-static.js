const express = require('express');
const path = require('path');
const paths = require('../paths');

module.exports = express.static(path.join(process.cwd(), paths.public));
