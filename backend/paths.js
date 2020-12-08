const join = require('path').join;
const paths = {

  // Routes
  api: '/api',
  login: '/login',
  logout: '/logout',
  download: '/download',
  upload: '/api', // Must be the same as api path
  graphiql: '/graphiql',
  redmine: '/redmine',
  admin: '/admin',

  // Filesystem
  public: 'public',
  images: join('public', 'images'),
  files: 'files',
  httpLog: join('logs', 'http.log'),
  cronLog: join('logs', 'cron.log'),
  dump: join('logs', 'dump.sql'),
  schemaJson: join('logs', 'schema.json'),
  schemaGraphQL: join('logs', 'schema.graphql'),

};

module.exports = paths;
