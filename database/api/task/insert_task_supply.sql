drop function if exists api.insert_task_supply;

create or replace function api.insert_task_supply (
  in task_id integer,
  in supply_id integer,
  in qty numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_supplies as ts values (
        task_id,
        supply_id,
        qty
      ) returning ts.task_id into id;
    end;
  $$
;
