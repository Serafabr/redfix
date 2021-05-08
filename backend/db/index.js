const { Pool } = require('pg');

const {
  PGUSER,
  PGPASSWORD,
  PGHOST,
  PGPORT,
  PGDATABASE,
  PGSETTINGS_APPLICATION_NAME,
  PGADMINUSER,
  PGADMINPASS,
  PGSETTINGS_APPLICATION_NAME_ADMIN,
  PGSETTINGS_STATEMENT_TIMEOUT,
} = process.env;

const config = {
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  application_name: PGSETTINGS_APPLICATION_NAME,
  statement_timeout: PGSETTINGS_STATEMENT_TIMEOUT,
};

const adminConfig = {
  user: PGADMINUSER,
  password: PGADMINPASS,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  application_name: PGSETTINGS_APPLICATION_NAME_ADMIN,
  statement_timeout: PGSETTINGS_STATEMENT_TIMEOUT,
};

const pgPool = new Pool(config);
const adminPgPool = new Pool(adminConfig);

module.exports = {
  pgPool: pgPool,
  adminPgPool: adminPgPool,
}
