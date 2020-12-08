const CronJob = require('cron').CronJob;
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const paths = require('../../paths');
const cronWritableStream = require('../cronWritableStream')

const dumpDatabase = async () => {
  try {
    const output = await exec(`pg_dump -f ${paths.dump} -d ${process.env.PGDATABASE}`);
    const logContent = `${(new Date()).toISOString()}\tdump\tok\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (error){
    cronWritableStream.write(`${(new Date()).toISOString()}\tdump\t${error}\n`, 'utf8');
    throw error;
  }
}

module.exports = {
  cronJob: new CronJob({
    cronTime: process.env.CRON_PATTERN_DUMP,
    onTick: dumpDatabase,
    onComplete: () => {},
    start: true,
    timezone: 'America/Sao_Paulo',
  }),
  fn: dumpDatabase,
}
