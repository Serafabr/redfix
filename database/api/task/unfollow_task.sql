\set function_name api.unfollow_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from person_tasks where person_id = get_person_id() and task_id = "taskId";
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
