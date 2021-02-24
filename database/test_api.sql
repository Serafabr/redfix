-- count mutations
select count(*) as total_of_mutations from api_docs where graphql_operation_type = 'mutation' \gset

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

\i run_all_mutations.sql

-- rollback transaction
rollback transaction;

-- use standard output again
\o

-- print results
select
  E'\n\nTested mutations:    ' ||
  :mutation_ok ||
  ' / ' ||
  :total_of_mutations ||
  E'\n\n'
as test_result_message \gset

\echo :test_result_message

-- unset psql variables
\unset test_result_message
\unset mutation_ok
\unset total_of_mutations
\unset invoice_to_be_removed
\unset project_to_be_removed
\unset supply_to_be_removed
\unset tag_to_be_removed
\unset not_used_output
\unset new_asset_id
\unset new_box_id
\unset new_depot_id
\unset new_firm_id
\unset new_invoice_id
\unset new_monitor_id
\unset new_monitor_read_id
\unset new_person_id
\unset new_plan_id
\unset new_price_id
\unset new_project_id
\unset new_spec_id
\unset new_supply_id
\unset new_tag_id
\unset new_task_event_id
\unset new_task_id
\unset new_task_template_id
\unset new_team_id
