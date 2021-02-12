\set function_name api.allow_task_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "supplyId" integer,
  in "qtyAllowed" numeric,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into task_supplies as ts (
        task_id,
        supply_id,
        qty_allowed
      ) values (
        "taskId",
        "supplyId",
        "qtyAllowed"
      ) on conflict on constraint task_supplies_pkey do
      update set qty_allowed = "qtyAllowed" where ts.task_id = "taskId" and ts.supply_id = "supplyId";
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `supplyId`\n
* `qtyAllowed`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
