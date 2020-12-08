const CronJob = require('cron').CronJob;
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const paths = require('../../paths');
const cronWritableStream = require('../cronWritableStream')

const dumpDatabase = async () => {
  try {
    const output = await exec(`pg_dump -f dumps/dump.sql -d ${process.env.PGDATABASE}`);
    const logContent = `Database dump executed successfully at: ${new Date()}\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (dumpError){
    cronWritableStream.write(dumpError, 'utf8');
  }
}

module.exports = /^\S+ \S+ \S+ \S+ \S+ \S+$/.test(process.env.CRON_DUMP) ? new CronJob({
  cronTime: process.env.CRON_DUMP,
  onTick: dumpDatabase,
  onComplete: () => {},
  start: true,
  timezone: 'America/Sao_Paulo',
}) : null;
