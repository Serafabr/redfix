\set function_name api.consume_task_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "supplyId" integer,
  in "qtyConsumed" numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_supplies as ts (
        task_id,
        supply_id,
        qty_consumed
      ) values (
        "taskId",
        "supplyId",
        "qtyConsumed"
      ) on conflict (task_id, supply_id) do
      update set qty_consumed = "qtyConsumed" where ts.task_id = "taskId" and ts.supply_id = "supplyId";
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
