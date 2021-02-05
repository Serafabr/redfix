\set function_name api.follow_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      -- 'on conflict do nothing' to avoid error in case the task was previously inserted
      insert into person_tasks values (get_person_id(), "taskId") on conflict do nothing;
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
