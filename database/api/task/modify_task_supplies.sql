drop function if exists api.modify_task_supplies;

create or replace function api.modify_task_supplies (
  in task_id integer,
  in supplies task_supplies[],
  out id integer
)
  language plpgsql
  as $$
    begin
      id = task_id;
      -- remove old supplies
      delete from task_supplies as ts where ts.task_id = id;
      -- insert new supplies
      insert into task_supplies as ts
        select  id,
                s.supply_id,
                s.qty
        from unnest(supplies) as s
      ;
    end;
  $$
;
