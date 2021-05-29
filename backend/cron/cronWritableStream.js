import fs from 'fs';
import path from 'path';
import paths from '../paths.js';

const cronWritableStream = fs.createWriteStream(
  path.join(process.cwd(), paths.cronLog),
  { flags: 'a' }
);

export default cronWritableStream;
