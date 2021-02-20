rollback;

-- set pg_settings variables
-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

-- set psql variables
\set ON_ERROR_STOP on
\set insert_ceb_data false

-- begin transaction;
begin transaction;

-- populate tables with sample data
\i samples/appliances.sql
\i samples/tags.sql
\i samples/persons.sql
\i samples/firms.sql
\i samples/projects.sql
\i samples/requests.sql
\i samples/depots.sql
\i samples/tasks.sql
\i samples/plans.sql
\i samples/invoices.sql

\if :insert_ceb_data
  \i samples/ceb_meters.sql
  \i samples/ceb_bills.sql
\endif 

-- commit transaction
commit transaction;

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off
