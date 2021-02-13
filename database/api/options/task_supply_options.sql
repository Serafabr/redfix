drop view if exists api.task_supply_options;
create or replace view api.task_supply_options as
  with supplies_list as (
    select  ab.box_id,
            coalesce(jsonb_agg(jsonb_build_object(
              'supplyId', s.supply_id,
              'supplySf', s.supply_sf,
              'price', s.price,
              'qtyInitial', s.qty_initial,
              'qtyBlocked', q.qty_blocked,
              'qtyUsed', q.qty_used,
              'qtyAvailable', q.qty_available,
              'name', z.name,
              'unit', z.unit
            ) order by s.supply_sf), jsonb_build_array()) as supplies
    from active_boxes as ab
    inner join supplies as s using (box_id)
    inner join quantities as q using (supply_id)
    inner join specs as z using (spec_id)
    group by ab.box_id
  ),
  boxes_list as (
    select  b.depot_id,
            coalesce(jsonb_agg(jsonb_build_object(
              'boxId', b.box_id,
              'boxSf', b.box_sf,
              'supplies', sl.supplies
            ) order by b.box_sf), jsonb_build_array()) as boxes
    from supplies_list as sl
    inner join boxes as b using (box_id)
    group by b.depot_id
  )
  select  coalesce(jsonb_agg(jsonb_build_object(
            'depotId', d.depot_id,
            'depotSf', d.depot_sf,
            'title', d.title,
            'boxes', bl.boxes
          )), jsonb_build_array()) as supply_options
  from boxes_list as bl
  inner join depots as d using (depot_id)
  group by d.depot_id
;
