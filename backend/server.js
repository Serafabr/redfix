import { createServer } from 'http';
import app from './app.js';
import cronJobs from './cron/index.js';

createServer(app).listen(
  process.env.HTTP_PORT,
  () => {
    console.log(`Server listening on port ${process.env.HTTP_PORT}!`);
  }
);
