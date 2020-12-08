const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const paths = require('../paths');

morgan.token('separator', req => '-----------------------------------------------------------------------------------------------------');
morgan.token('user', req => JSON.stringify(req.user ? req.user : '0-visitor'));
morgan.token('session', req => JSON.stringify(req.session));
morgan.token('body', req => JSON.stringify(req.baseUrl === paths.login ? { email: req.body.email, password: '******' } : req.body));

const logFormat = `:date[iso]\t:remote-addr\t:method\t:url\t:status\t:response-time\t:user\t:session\t:body`;
const logFormatWithSeparator = `\n:separator\n${logFormat}`;

const logStreamConsole = process.stdout;
const logStreamFile = fs.createWriteStream(
  path.join(process.cwd(), paths.httpLog),
  { flags: 'a' }
);

module.exports = {
  logConsole: morgan(
    logFormatWithSeparator,
    {
      skip: () => (process.env.NODE_ENV !== 'development'),
      stream: logStreamConsole,
    }
  ),
  logFile: morgan(
    logFormat,
    {
      stream: logStreamFile,
    }
  ),
};
