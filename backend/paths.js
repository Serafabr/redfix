import { join } from 'path';

const cwd = process.cwd();

export default {
  // Routes
  api: '/api',
  login: '/login',
  logout: '/logout',
  download: '/download',
  graphiql: '/graphiql',
  redmine: '/redmine',
  // Filesystem
  public: join(cwd, 'public'),
  images: join(cwd, 'public', 'images'),
  files: join(cwd, 'files'),
  httpLog: join(cwd, 'logs', 'http.log'),
  cronLog: join(cwd, 'logs', 'cron.log'),
  diffLog: join(cwd, 'logs', 'diff.log'),
  dump: join(cwd, 'logs', 'dump.sql'),
  schemaJson: join(cwd, 'logs', 'schema.json'),
  schemaGraphQL: join(cwd, 'logs', 'schema.graphql'),
};
