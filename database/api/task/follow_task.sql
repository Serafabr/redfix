\set function_name api.follow_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      -- 'on conflict do nothing' to avoid error in case the task was previously inserted
      insert into person_tasks values (get_person_id(), "taskId") on conflict do nothing;
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
