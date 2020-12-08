const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const { HTTP_PORT, CRON_JOBS } = process.env;

// Cron jobs
const cronJobs = CRON_JOBS === 'on' ? require('./cron').cronJobs : null;

// Listen for connections on specified port
server.listen(
  HTTP_PORT,
  () => {
    // console.log(process.env);
    console.log(`Server listening on port ${HTTP_PORT}!`);
  }
);
