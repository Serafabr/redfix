const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const paths = require('../paths');

morgan.token('separator', req => '-'.repeat(100));
morgan.token('session', req => `${req.cmmsSession.personId}-${req.cmmsSession.role}`);
morgan.token('body', req => JSON.stringify(req.baseUrl === paths.login ? { username: req.body.username, password: '******' } : req.body));

const templateForFile = `:date[iso]\t:remote-addr\t:method\t:url\t:status\t:response-time\t:session\t:body`;
const templateForConsole = `\n:separator\n${templateForFile}`;

const streamForFile = fs.createWriteStream(path.join(process.cwd(), paths.httpLog), { flags: 'a' });
const streamForConsole = process.stdout;

const { LOG_OUTPUT } = process.env;

module.exports = {
  logFile: morgan(
    templateForFile,
    {
      stream: streamForFile,
      skip: () => LOG_OUTPUT === 'console' || LOG_OUTPUT === 'none',
    }
  ),
  logConsole: morgan(
    templateForConsole,
    {
      stream: streamForConsole,
      skip: () => LOG_OUTPUT === 'file' || LOG_OUTPUT === 'none',
    }
  ),
};
