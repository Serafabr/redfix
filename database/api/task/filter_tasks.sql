\set function_name api.filter_tasks

drop function if exists :function_name;
create or replace function :function_name (
  in "filterStart" date default '2000-01-01'::date,
  in "filterEnd" date default '2999-12-31'::date
)
  returns setof api.tasks
  language sql
  stable
  as $$
    select * from api.tasks where created_at >= "filterStart" and created_at <= "filterEnd";
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;

select generate_api_documentation(:'function_name',E'Output: taskData\n') as new_comment \gset

comment on function :function_name is :'new_comment';
