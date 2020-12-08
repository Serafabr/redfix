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
    const logContent = `${(new Date()).toISOString()}\tdiff\tok [${diffUUIDs.join(',').replace(/\.gitkeep\n/, '')}]\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (error){
    cronWritableStream.write(`${(new Date()).toISOString()}\tdiff\t${error}\n`, 'utf8');
    throw error;
  }
}

module.exports = {
  cronJob: new CronJob({
    cronTime: process.env.CRON_PATTERN_DIFF,
    onTick: diffUploadedFiles,
    onComplete: () => {},
    start: true,
    timezone: 'America/Sao_Paulo',
  }),
  fn: diffUploadedFiles,
}
