import { createWriteStream } from 'fs';
import paths from '../paths.js';

export default createWriteStream(
  paths.cronLog,
  { flags: 'a' }
);
