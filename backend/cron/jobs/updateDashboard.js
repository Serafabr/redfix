import cron from 'cron';
import { pgPool } from '../../db/index.js';
import cronWritableStream from '../cronWritableStream.js';

const updateDashboard = async () => {
  try {
    const { rows: [ { timestamp } ] } = await pgPool.query('select web.update_dashboard() as timestamp');
    const logContent = `${(new Date()).toISOString()}\tdashboard\tok\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (error) {
    cronWritableStream.write(`${(new Date()).toISOString()}\tdashboard\t${error}\n`, 'utf8');
    throw error;
  }
}

export default new cron.CronJob({
  cronTime: process.env.CRON_PATTERN_DASHBOARD,
  onTick: updateDashboard,
  start: true,
  timezone: process.env.CRON_TIMEZONE,
});
