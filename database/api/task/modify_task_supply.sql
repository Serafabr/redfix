\set function_name api.modify_task_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "supplyId" integer,
  in "qty" numeric,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      new_qty alias for "qty";
    begin
      update task_supplies set qty = new_qty where task_id = "taskId" and supply_id = "supplyId";
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskId`\n
* `supplyId`\n
* `newQty`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
