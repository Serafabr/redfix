\set function_name api.allow_planned_task_supplies

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "suppliesIds" integer[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update task_supplies as ts set qty_allowed = qty_planned where ts.task_id = "taskId" and ts.supply_id in (select unnest("suppliesIds"));
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `suppliesIds`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
