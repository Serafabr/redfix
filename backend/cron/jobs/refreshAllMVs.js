const CronJob = require('cron').CronJob;
const { adminPgPool } = require('../../db');
const cronWritableStream = require('../cronWritableStream');

const refreshAllMVs = async () => {
  try {
    const { rows: [ { timestamp } ] } = await adminPgPool.query('select web.refresh_all_materialized_views() as timestamp');
    const logContent = `${(new Date()).toISOString()}\trefresh\tok\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (error) {
    cronWritableStream.write(`${(new Date()).toISOString()}\trefresh\t${error}\n`, 'utf8');
    throw error;
  }
}

module.exports = new CronJob({
  cronTime: process.env.CRON_PATTERN_REFRESH,
  onTick: refreshAllMVs,
  start: true,
  timezone: process.env.CRON_TIMEZONE,
});
