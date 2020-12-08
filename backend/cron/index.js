const diffUploadedFiles = require('./jobs/diffUploadedFiles');
const dumpDatabase = require('./jobs/dumpDatabase');
const refreshAllMVs = require('./jobs/refreshAllMVs');
const testCron = require('./jobs/testCron');

module.exports = {
  diffUploadedFiles,
  dumpDatabase,
  refreshAllMVs,
  testCron,
}
