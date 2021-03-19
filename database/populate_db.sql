\echo '\n\n\n\n\nPopulating the database using API mutations...\n\n'

-- reset LAST_ERROR_SQLSTATE
\set LAST_ERROR_SQLSTATE '00000'

-- set QUIET on
\set QUIET on

-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

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

-- check there was no error
select :'LAST_ERROR_SQLSTATE' = '00000' as db_was_populated \gset

\if :db_was_populated
  
  -- print message
  \echo '\n\nThe database was populated\n\n'

  \else

  \echo '\n\nThere was an error\n\n'

\endif

-- unset variables
\i scripts/unset_psql_variables
