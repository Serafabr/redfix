const diffUploadedFiles = require('./jobs/diffUploadedFiles');
const dumpDatabase = require('./jobs/dumpDatabase');
const refreshAllMVs = require('./jobs/refreshAllMVs');
const updateDashboard = require('./jobs/updateDashboard');

module.exports = {
  diffUploadedFiles,
  dumpDatabase,
  refreshAllMVs,
  updateDashboard,
}
