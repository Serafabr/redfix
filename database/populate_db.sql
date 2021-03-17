rollback;

-- set QUIET on
\set QUIET on

-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

-- set ON_ERROR_STOP to on
\set ON_ERROR_STOP on

-- initialize string with comma separated list of all tested mutations
\set all_mutations ''

-- choose if energy_bills is to be populated
\set insert_energy_bills false

-- run mutations inside a transaction and commit
begin transaction;
\i scripts/run_all_mutations.sql
\if :insert_energy_bills
  \i samples/energy_bills.sql
\endif 
commit transaction;

-- set QUIET off
\set QUIET off

-- print message
\echo '\n\nThe database was populated\n\n'

-- unset variables
\i scripts/unset_psql_variables
\set ON_ERROR_STOP off
