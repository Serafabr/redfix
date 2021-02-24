-- count mutations
select count(*) as total_of_mutations from api_docs where graphql_operation_type = 'mutation' \gset

set cookie.session.person_id to 1;

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- discard output
\o /dev/null

-- begin transaction
begin transaction;

\i run_all_mutations.sql

-- rollback transaction
rollback transaction;

-- use standard output again
\o

-- print results
select :mutation_ok || ' of ' || :total_of_mutations || ' were tested' as test_result_message \gset
\echo :test_result_message
