const CronJob = require('cron').CronJob;
const fs = require('fs');
const path = require('path');
const db = require('../../db');
const paths = require('../../paths');
const cronWritableStream = require('../cronWritableStream');

const diffUploadedFiles = async () => {

  try {
    const { rows: [ { dbUUIDs } ] } = await db.query('select web.get_all_files_uuids() as "dbUUIDs"');

    const UUIDs = fs.readdirSync(path.join(process.cwd(), paths.files));

    const diffUUIDs = UUIDs.filter(uuid => (!dbUUIDs.includes(uuid)));

    const logContent =
      `Diff of uploaded files at: ${new Date()}` +
      '\n------------------------------------\n' +
      diffUUIDs.join('\n').replace(/\.gitkeep\n/, '') +
      '\n------------------------------------\n'
    ;

    cronWritableStream.write(logContent, 'utf8');

  } catch (diffError){

    cronWritableStream.write(diffError, 'utf8');

  }
}

module.exports = /^\S+ \S+ \S+ \S+ \S+ \S+$/.test(process.env.CRON_DIFF) ? new CronJob({
  cronTime: process.env.CRON_DIFF,
  onTick: diffUploadedFiles,
  onComplete: () => {},
  start: true,
  timezone: 'America/Sao_Paulo',
}) : null;
