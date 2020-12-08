\set function_name api.insert_task_supply

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
    begin
      insert into task_supplies values ("taskId", "supplyId", "qty");
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `supplyId`\n
* `qty`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
