import morgan from 'morgan';
import { createWriteStream } from 'fs';
import paths from '../paths.js';

morgan.token('separator', req => '-'.repeat(100));
morgan.token('session', req => {
  const u = req.baseUrl !== paths.logout ? req.user : req.loggedOutUser;
  return `${u.personId === '' ? '-' : u.personId}\t${u.role === '' ? '-' : u.role}`;
});
morgan.token('body', req => JSON.stringify(req.baseUrl === paths.login || /changepassword/i.test(req?.body?.query) || /createenergybills/i.test(req?.body?.query) ? { username: req?.body?.username, query: req?.body?.query } : req.body));

const templateForFile = `:date[iso]\t:remote-addr\t:method\t:url\t:status\t:response-time\t:session\t:body`;
const templateForConsole = `\n:separator\n${templateForFile}`;

const streamForFile = createWriteStream(paths.httpLog, { flags: 'a' });
const streamForConsole = process.stdout;

const LOG_OUTPUTS = JSON.parse(process.env.LOG_OUTPUTS);

export default {
  file: morgan(
    templateForFile,
    {
      stream: streamForFile,
      skip: () => !LOG_OUTPUTS.includes('file'),
    },
  ),
  console: morgan(
    templateForConsole,
    {
      stream: streamForConsole,
      skip: () => !LOG_OUTPUTS.includes('console'),
    }
  ),
};
