rollback;

-- set QUIET on
\set QUIET on

-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

-- set ON_ERROR_STOP to on
\set ON_ERROR_STOP on

-- initialize string with comma separated list of all tested mutations
\set all_mutations ''

-- run mutations inside a transaction and rollback
begin transaction;
\i scripts/run_all_mutations.sql
rollback transaction;

-- set QUIET off
\set QUIET off

-- count mutations
select count(*) as total_of_mutations from api_docs where graphql_operation_type = 'mutation' \gset

-- print results
select count(u.*) as total_tested_mutations from (select unnest(regexp_split_to_array(regexp_replace(:'all_mutations',',$',''),','))) as u \gset
select
  E'\n\nTESTED MUTATIONS:    ' ||
  :'total_tested_mutations' ||
  ' / ' ||
  :total_of_mutations ||
  E'\n\n'
as test_result_message \gset

\echo :test_result_message

with not_tested_mutations as (
  select operation_name from api_docs where graphql_operation_type = 'mutation'
  except
  select unnest(regexp_split_to_array(regexp_replace(:'all_mutations',',$',''),',')) as operation_name
) select operation_name as "NOT TESTED MUTATIONS" from not_tested_mutations;

-- unset psql variables
\i scripts/unset_psql_variables
\set ON_ERROR_STOP off
