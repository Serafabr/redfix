const { Pool } = require('pg');

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
};

const adminConfig = {
  user: process.env.PGADMINUSER,
  password: process.env.PGADMINPASS,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
};

const pgPool = new Pool(config);
const adminPgPool = new Pool(adminConfig);

module.exports = {
  pgPool: pgPool,
  adminPgPool: adminPgPool,
}
