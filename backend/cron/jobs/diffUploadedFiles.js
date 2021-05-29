import cron from 'cron';
import fs from 'fs';
import path from 'path';
import { adminPgPool } from '../../db/index.js';
import paths from '../../paths.js';
import cronWritableStream from '../cronWritableStream.js';

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

export default new cron.CronJob({
  cronTime: process.env.CRON_PATTERN_DIFF,
  onTick: diffUploadedFiles,
  start: true,
  timezone: process.env.CRON_TIMEZONE,
});
