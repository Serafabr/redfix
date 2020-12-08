\set function_name api.modify_task_supplies

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in supplies task_supplies[],
  out id integer
)
  language plpgsql
  as $$
    begin
      -- remove old supplies
      delete from task_supplies where task_id = "taskId";
      -- insert new supplies
      insert into task_supplies
        select  "taskId",
                s.supply_id,
                s.qty
        from unnest(supplies) as s
      ;
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
