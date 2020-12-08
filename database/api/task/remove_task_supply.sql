\set function_name api.remove_task_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "supplyId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from task_supplies where task_id = "taskId" and supply_id = "supplyId";
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `supplyId`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
