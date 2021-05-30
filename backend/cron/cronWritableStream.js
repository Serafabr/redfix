import { createWriteStream } from 'fs';
import { join } from 'path';
import paths from '../paths.js';

export default createWriteStream(
  join(process.cwd(), paths.cronLog),
  { flags: 'a' }
);
