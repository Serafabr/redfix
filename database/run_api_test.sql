-- count mutations
select count(*) as total_of_mutations from api_docs where graphql_operation_type = 'mutation' \gset


\set all_mutations ''


-- set pg_settings variables
-- "login" to allow inserts (mandatory person_id in some columns)
\set QUIET on
set cookie.session.person_id to 1;
\set QUIET off

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- discard output
\o /dev/null

-- reset mutation_ok count
\set mutation_ok 0

-- begin transaction
begin transaction;

\i scripts/run_all_mutations.sql

-- rollback transaction
rollback transaction;

-- use standard output again
\o

-- print results
select
  E'\n\nTESTED MUTATIONS:    ' ||
  :mutation_ok ||
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
