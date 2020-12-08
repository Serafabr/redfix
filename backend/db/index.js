const { Pool } = require('pg');

const pgConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pgPool = new Pool(pgConfig);

module.exports = {
  pgConfig: pgConfig,
  pgPool: pgPool,
  query: (queryText, params, callback) => {
    return pgPool.query(queryText, params, callback);
  },
}