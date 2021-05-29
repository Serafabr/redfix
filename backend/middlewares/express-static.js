import express from 'express';
import { join } from 'path';
import paths from '../paths.js';

export default express.static(join(process.cwd(), paths.public));
