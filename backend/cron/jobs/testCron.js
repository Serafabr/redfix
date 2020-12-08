const CronJob = require('cron').CronJob;

const testCron = () => {
  console.log('... Testing Cron ...');
}

module.exports = /^\S+ \S+ \S+ \S+ \S+ \S+$/.test(process.env.CRON_TEST) ? new CronJob({
  cronTime: process.env.CRON_TEST,
  onTick: testCron,
  onComplete: () => {},
  start: true,
  timezone: 'America/Sao_Paulo',
}) : null;
