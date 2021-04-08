\echo '\n\n\n\n\nInitiating test of triggers...\n\n'

-- reset LAST_ERROR_SQLSTATE
\set LAST_ERROR_SQLSTATE '00000'

-- set QUIET on
\set QUIET on

-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

-- set QUIET off
-- \set QUIET off

-- run mutations that should fail inside triggers
-- RF101
select api.create_appliance('assetsf','name',2,2);
\set errcode_RF101 :LAST_ERROR_SQLSTATE
-- RF104
select api.add_child_to_asset(102, 102);
\set errcode_RF104 :LAST_ERROR_SQLSTATE
-- etc

select (
  :'errcode_RF101' = 'RF101'
  and
  :'errcode_RF104' = 'RF104'
) as triggers_ok \gset

\if :triggers_ok
  \echo '\n\nAll triggers ok\n\n'
  \else \echo '\n\nThere was a problem\n\n'
\endif

-- unset psql variables
\i psql_scripts/unset_psql_variables.sql
