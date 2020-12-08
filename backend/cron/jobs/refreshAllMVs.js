const CronJob = require('cron').CronJob;
const db = require('../../db');
const cronWritableStream = require('../cronWritableStream');

const refreshAllMVs = async () => {
  try {
    const { rows: [ { timestamp } ] } = await db.query('select web.refresh_all_materialized_views() as timestamp');
    const logContent = `Materialized views refreshed at: ${timestamp}\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (refreshError) {
    cronWritableStream.write(refreshError, 'utf8');
  }
}

module.exports = /^\S+ \S+ \S+ \S+ \S+ \S+$/.test(process.env.CRON_REFRESH) ? new CronJob({
  cronTime: process.env.CRON_REFRESH,
  onTick: refreshAllMVs,
  onComplete: () => {},
  start: true,
  timezone: 'America/Sao_Paulo',
}) : null;
