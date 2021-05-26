const http = require('http');
const app = require('./app');
const cronJobs = require('./cron');

const server = http.createServer(app);
const { HTTP_PORT } = process.env;

// Listen for connections on specified port
server.listen(
  HTTP_PORT,
  () => {
    console.log(`Server listening on port ${HTTP_PORT}!`);
  }
);
