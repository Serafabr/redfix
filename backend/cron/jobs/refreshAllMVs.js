import cron from 'cron';
import { pgPool } from '../../db/index.js';
import cronWritableStream from '../cronWritableStream.js';

const refreshAllMVs = async () => {
  try {
    const { rows: [ { timestamp } ] } = await pgPool.query('select web.refresh_all_materialized_views() as timestamp');
    const logContent = `${(new Date()).toISOString()}\trefresh\tok\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (error) {
    cronWritableStream.write(`${(new Date()).toISOString()}\trefresh\t${error}\n`, 'utf8');
    throw error;
  }
}

export default new cron.CronJob({
  cronTime: process.env.CRON_PATTERN_REFRESH,
  onTick: refreshAllMVs,
  start: true,
  timezone: process.env.CRON_TIMEZONE,
});
