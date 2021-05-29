import pg from 'pg';

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

export const pgPool = new pg.Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  application_name: PGSETTINGS_APPLICATION_NAME,
  statement_timeout: PGSETTINGS_STATEMENT_TIMEOUT,
});

export const adminPgPool = new pg.Pool({
  user: PGADMINUSER,
  password: PGADMINPASS,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  application_name: PGSETTINGS_APPLICATION_NAME_ADMIN,
  statement_timeout: PGSETTINGS_STATEMENT_TIMEOUT,
});
