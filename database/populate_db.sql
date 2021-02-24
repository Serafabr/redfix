rollback;

-- set pg_settings variables
-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

-- set psql variables
\set ON_ERROR_STOP on
\set insert_ceb_data false
\set mutation_ok 0

-- begin transaction;
begin transaction;

-- use api to insert sample data
\i run_all_mutations.sql

-- ceb data
\if :insert_ceb_data
  \i samples/ceb_bills.sql
\endif 

-- commit transaction
commit transaction;

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off
