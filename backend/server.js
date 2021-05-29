import http from 'http';
import app from './app.js';
import cronJobs from './cron/index.js';

const server = http.createServer(app);
const { HTTP_PORT } = process.env;

// Listen for connections on specified port
server.listen(
  HTTP_PORT,
  () => {
    console.log(`Server listening on port ${HTTP_PORT}!`);
  }
);
