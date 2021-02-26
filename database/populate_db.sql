-- set psql variables
\set LAST_ERROR_MESSAGE ''
\set LAST_ERROR_SQLSTATE '00000'
\set ON_ERROR_STOP off
\set QUIET on
\set insert_ceb_data false
\set mutation_ok 0

-- set pg_settings variables
-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

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

-- set QUIET off
\set QUIET off

-- print message
select :'LAST_ERROR_SQLSTATE' = '00000' as my_boolean_test \gset

\if :my_boolean_test
  \echo '\n\nThe database was populated\n\n'
  \else
    \echo '\n\nThere was an error\n\n'
\endif

-- unset variables
\i scripts/unset_psql_variables
