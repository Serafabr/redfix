\echo '\n\n\n\n\nTesting API mutations...\n\n'

-- reset LAST_ERROR_SQLSTATE
\set LAST_ERROR_SQLSTATE '00000'

-- set QUIET on
\set QUIET on

-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

-- initialize string with comma separated list of all tested mutations
\set all_mutations ''

-- run mutations inside a transaction and rollback
begin transaction;
\i psql_scripts/run_all_mutations.sql
rollback transaction;

-- set QUIET off
\set QUIET off

-- check that tests were ok
select :'LAST_ERROR_SQLSTATE' = '00000' as api_test_ok \gset

\if :api_test_ok

  -- count all api mutations
  select count(*) as total_of_mutations from api_docs where graphql_operation_type = 'mutation' \gset

  -- count all api tested mutations
  select count(u.*) as total_tested_mutations from (select unnest(regexp_split_to_array(regexp_replace(:'all_mutations',',$',''),','))) as u \gset

  -- find not tested api mutations and print results
  with not_tested_mutations as (
    select operation_name from api_docs where graphql_operation_type = 'mutation'
    except
    select unnest(regexp_split_to_array(regexp_replace(:'all_mutations',',$',''),',')) as operation_name
  ), not_tested_mutations_string as (
    select string_agg(operation_name,E'\n') as not_tested_mutations_string from not_tested_mutations
  ) select
    :total_tested_mutations as "TESTED MUTATIONS",
    :total_of_mutations as "TOTAL OF MUTATIONS",
    coalesce(not_tested_mutations_string,'') as "NOT TESTED MUTATIONS"
    from not_tested_mutations_string
  ;

  \else

  \echo '\n\nMutation with error: ' :mutation_with_error '\n\n'

\endif

-- unset psql variables
\i psql_scripts/unset_psql_variables.sql
