import fs from 'fs';
import { join } from 'path';
import paths from '../paths.js';

export default fs.createWriteStream(
  join(process.cwd(), paths.cronLog),
  { flags: 'a' }
);
