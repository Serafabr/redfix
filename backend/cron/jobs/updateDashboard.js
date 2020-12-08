const CronJob = require('cron').CronJob;
const { adminPgPool } = require('../../db');
const cronWritableStream = require('../cronWritableStream');

const updateDashboard = async () => {
  try {
    const { rows: [ { timestamp } ] } = await adminPgPool.query('select web.update_dashboard() as timestamp');
    const logContent = `${(new Date()).toISOString()}\tdashboard\tok\n`;
    cronWritableStream.write(logContent, 'utf8');
  } catch (error) {
    cronWritableStream.write(`${(new Date()).toISOString()}\tdashboard\t${error}\n`, 'utf8');
    throw error;
  }
}

module.exports = {
  cronJob: new CronJob({
    cronTime: process.env.CRON_PATTERN_DASHBOARD,
    onTick: updateDashboard,
    onComplete: () => {},
    start: true,
    timezone: 'America/Sao_Paulo',
  }),
  fn: updateDashboard,
 }
 
