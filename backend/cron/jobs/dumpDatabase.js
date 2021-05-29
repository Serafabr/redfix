import cron from 'cron';
import util from 'util';
import { exec as e } from 'child_process';
import paths from '../../paths.js';
import cronWritableStream from '../cronWritableStream.js';

const exec = util.promisify(e);

const { PGDATABASE, PGADMINUSER } = process.env;

const dumpDatabase = async () => {
  try {
    const output = await exec(`pg_dump -f ${paths.dump} -d ${PGDATABASE} -U ${PGADMINUSER} -w`);
    const logContent = `${(new Date()).toISOString()}\tdump\tok\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (error){
    cronWritableStream.write(`${(new Date()).toISOString()}\tdump\t${error}\n`, 'utf8');
    throw error;
  }
}

export default new cron.CronJob({
  cronTime: process.env.CRON_PATTERN_DUMP,
  onTick: dumpDatabase,
  start: true,
  timezone: process.env.CRON_TIMEZONE,
});
