\set function_name get_supplies_of_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select listify_null(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'specId', s.spec_id,
          'supplyId', s.supply_id,
          'supplySf', s.supply_sf,
          'boxId', b.box_id,
          'boxSf', b.box_sf,
          'depotId', d.depot_id,
          'depotSf', d.depot_sf,
          'qty', ts.qty,
          'price', s.price,
          'totalPrice', ts.qty * s.price,
          'name', z.name,
          'unit', z.unit
        ) order by d.depot_sf, b.box_sf, s.supply_sf) as l
      from task_supplies as ts
      inner join supplies as s using (supply_id)
      inner join boxes as b using (box_id)
      inner join depots as d using (depot_id)
      inner join specs as z using (spec_id)
      where ts.task_id = "taskId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
