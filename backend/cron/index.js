import { promisify } from 'util';
import { exec } from 'child_process';
import fs from 'fs';
import cron from 'cron';
import { pgPool } from '../db/index.js';
import paths from '../paths.js';

const cronWriteStream = fs.createWriteStream(paths.cronLog, { flags: 'a' });

const {
  PGDATABASE,
  PGADMINUSER,
  CRON_TIMEZONE,
  CRON_PATTERN_DUMP,
  CRON_PATTERN_DIFF,
  CRON_PATTERN_DASHBOARD,
  CRON_PATTERN_REFRESH,
} = process.env;

const dumpDatabase = async () => {
  try {
    const exec_ = promisify(exec);
    await exec_(`pg_dump -f ${paths.dump} -d ${PGDATABASE} -U ${PGADMINUSER} -w`);
    cronWriteStream.write(`${(new Date()).toISOString()}\tdump\tok\n`);
  } catch (error){
    cronWriteStream.write(`${(new Date()).toISOString()}\tdump\t${error}\n`);
  }
}

const diffUploadedFiles = async () => {
  try {
    const UUIDs = fs.readdirSync(paths.files);
    const { rows: [ { dbUUIDs } ] } = await pgPool.query('select web.get_all_files_uuids() as "dbUUIDs"');
    const diffUUIDs = UUIDs.filter(uuid => (!dbUUIDs.includes(uuid)));
    cronWriteStream.write(`${(new Date()).toISOString()}\tdiff\tok\n`);
    const diffWriteStream = fs.createWriteStream(paths.diffLog);
    diffWriteStream.write(`${diffUUIDs.join('\n')}\n`);
    diffWriteStream.close();
  } catch (error){
    cronWriteStream.write(`${(new Date()).toISOString()}\tdiff\t${error}\n`);
  }
}

const updateDashboard = async () => {
  try {
    await pgPool.query('select web.update_dashboard()');
    cronWriteStream.write(`${(new Date()).toISOString()}\tdashboard\tok\n`);
  } catch (error) {
    cronWriteStream.write(`${(new Date()).toISOString()}\tdashboard\t${error}\n`);
  }
}

const refreshAllMVs = async () => {
  try {
    await pgPool.query('select web.refresh_all_materialized_views()');
    cronWriteStream.write(`${(new Date()).toISOString()}\trefresh\tok\n`);
  } catch (error) {
    cronWriteStream.write(`${(new Date()).toISOString()}\trefresh\t${error}\n`);
  }
}

const dump = new cron.CronJob({
  cronTime: CRON_PATTERN_DUMP,
  onTick: dumpDatabase,
  start: true,
  timezone: CRON_TIMEZONE,
});

const diff = new cron.CronJob({
  cronTime: CRON_PATTERN_DIFF,
  onTick: diffUploadedFiles,
  start: true,
  timezone: CRON_TIMEZONE,
});

const dashboard = new cron.CronJob({
  cronTime: CRON_PATTERN_DASHBOARD,
  onTick: updateDashboard,
  start: true,
  timezone: CRON_TIMEZONE,
});

const refresh = new cron.CronJob({
  cronTime: CRON_PATTERN_REFRESH,
  onTick: refreshAllMVs,
  start: true,
  timezone: CRON_TIMEZONE,
});

export default {
  dump,
  diff,
  dashboard,
  refresh,
}
