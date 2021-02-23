\set function_name api.filter_tasks

drop function if exists :function_name;
create or replace function :function_name (
  in filter_start date default '2000-01-01'::date,
  in filter_end date default '2999-12-31'::date
)
  returns setof api.task_data
  language sql
  stable
  as $$
    select * from api.task_data where created_at >= filter_start and created_at <= filter_end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee, visitor;

select generate_api_documentation(:'function_name',E'Output: taskData\n') as new_comment \gset

comment on function :function_name is :'new_comment';
