const CronJob = require('cron').CronJob;
const fs = require('fs');
const path = require('path');
const { adminPgPool } = require('../../db');
const paths = require('../../paths');
const cronWritableStream = require('../cronWritableStream');

const diffUploadedFiles = async () => {
  try {
    const UUIDs = fs.readdirSync(path.join(process.cwd(), paths.files));
    const { rows: [ { dbUUIDs } ] } = await adminPgPool.query('select web.get_all_files_uuids() as "dbUUIDs"');
    const diffUUIDs = UUIDs.filter(uuid => (!dbUUIDs.includes(uuid)));
    const logContent = `${(new Date()).toISOString()}\tdiff\tok\n`;
    cronWritableStream.write(logContent, 'utf8');

    const diffWritableStream = fs.createWriteStream(path.join(process.cwd(), paths.diffLog));
    diffWritableStream.write(`${diffUUIDs.join('\n')}\n`, 'utf8');
    diffWritableStream.close();
  } catch (error){
    cronWritableStream.write(`${(new Date()).toISOString()}\tdiff\t${error}\n`, 'utf8');
    throw error;
  }
}

module.exports = new CronJob({
  cronTime: process.env.CRON_PATTERN_DIFF,
  onTick: diffUploadedFiles,
  start: true,
  timezone: process.env.CRON_TIMEZONE,
});
