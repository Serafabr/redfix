const diffUploadedFiles = require('./jobs/diffUploadedFiles');
const dumpDatabase = require('./jobs/dumpDatabase');
const refreshAllMVs = require('./jobs/refreshAllMVs');
const updateDashboard = require('./jobs/updateDashboard');

const cronJobs = [];
cronJobs.push(diffUploadedFiles.cronJob);
cronJobs.push(dumpDatabase.cronJob);
cronJobs.push(refreshAllMVs.cronJob);
cronJobs.push(updateDashboard.cronJob);

module.exports = {
  cronJobs: cronJobs,
  diffUploadedFiles: diffUploadedFiles.fn,
  dumpDatabase: dumpDatabase.fn,
  refreshAllMVs: refreshAllMVs.fn,
  updateDashboard: updateDashboard.fn,
}
