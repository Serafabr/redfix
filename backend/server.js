const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const port = process.env.HTTP_PORT;

// Cron jobs
const cronJobs = require('./cron');

// Listen for connections on specified port
server.listen(
  port,
  () => {
    console.log(process.env);
    console.log(`Server listening on port ${port}!`);
  }
);
