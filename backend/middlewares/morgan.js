const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const paths = require('../paths');

morgan.token('separator', req => '-'.repeat(100));
morgan.token('session', req => {
  const u = req.baseUrl !== paths.logout ? req.user : req.loggedOutUser;
  return `${u.personId === '' ? '-' : u.personId}\t${u.role === '' ? '-' : u.role}`;
});
morgan.token('body', req => JSON.stringify(req.baseUrl === paths.login ? { username: req.body.username } : req.body));

const templateForFile = `:date[iso]\t:remote-addr\t:method\t:url\t:status\t:response-time\t:session\t:body`;
const templateForConsole = `\n:separator\n${templateForFile}`;

const streamForFile = fs.createWriteStream(path.join(process.cwd(), paths.httpLog), { flags: 'a' });
const streamForConsole = process.stdout;

const LOG_OUTPUTS = JSON.parse(process.env.LOG_OUTPUTS);

module.exports = {
  logFile: morgan(
    templateForFile,
    {
      stream: streamForFile,
      skip: () => !LOG_OUTPUTS.includes('file'),
    }
  ),
  logConsole: morgan(
    templateForConsole,
    {
      stream: streamForConsole,
      skip: () => !LOG_OUTPUTS.includes('console'),
    }
  ),
};
