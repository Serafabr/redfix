drop view if exists api.depots;
create or replace view api.depots as
  with
    ord_supplies as (
      select  b.depot_id,
              b.box_id,
              b.box_sf,
              s.supply_id,
              s.supply_sf,
              z.spec_sf,
              z.name,
              z.unit,
              s.qty_initial,
              s.price,
              q.qty_consumed,
              q.qty_blocked,
              q.qty_available
        from supplies as s
        inner join boxes as b using (box_id)
        inner join specs as z using (spec_id)
        inner join quantities as q using (supply_id)
      order by b.box_id, s.supply_sf
    ),
    agg_supplies as (
      select  os.depot_id,
              os.box_id,
              os.box_sf,
              jsonb_agg(jsonb_build_object(
                'supplyId', os.supply_id,
                'supplySf', os.supply_sf,
                'specSf', os.spec_sf,
                'name', os.name,
                'unit', os.unit,
                'qtyInitial', os.qty_initial,
                'price', os.price,
                'qtyBlocked', os.qty_blocked,
                'qtyConsumed', os.qty_consumed,
                'qtyAvailable', os.qty_available
              )) as supplies
        from ord_supplies as os
      group by os.depot_id, os.box_id, os.box_sf
    ),
    agg_boxes as (
      select  b.depot_id,
              jsonb_agg(jsonb_build_object(
                'boxId', b.box_id,
                'boxSf', b.box_sf,
                'supplies', coalesce(a.supplies, jsonb_build_array())
              )) as boxes
        from boxes as b
        left join agg_supplies as a using (box_id)
      group by b.depot_id
    ),
    ord_tasks as (
      select  d.depot_id,
              t.task_id,
              t.title
      from task_supplies as ts
      inner join supplies as s using (supply_id)
      inner join boxes as b using (box_id)
      inner join depots as d using (depot_id)
      inner join tasks as t using (task_id)
      order by t.task_id desc
    ),
    agg_tasks as (
      select  ot.depot_id,
              jsonb_agg(jsonb_build_object(
                'taskId', ot.task_id,
                'title', ot.title
              )) tasks
      from ord_tasks as ot
      group by ot.depot_id
    )
  select  d.*,
          dc.depot_category_text,
          ab.boxes,
          coalesce(ak.tasks, jsonb_build_array()) as tasks
  from depots as d
  inner join depot_categories as dc using (depot_category_id)
  inner join agg_boxes as ab using (depot_id)
  left join agg_tasks as ak using (depot_id)
;
