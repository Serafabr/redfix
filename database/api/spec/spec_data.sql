drop view if exists api.spec_data;

create or replace view api.spec_data as
  with
    supplies_of_spec as (
      select  z.spec_id,
              sum(q.qty_available) as total_available,
              jsonb_agg(jsonb_build_object(
                'supplyId', s.supply_id,
                'supplySf', s.supply_sf,
                'price', s.price,
                'boxId', b.box_id,
                'boxSf', b.box_sf,
                'depotId', d.depot_id,
                'depotSf', d.depot_sf,
                'title', d.title,
                'qtyInitial', q.qty_initial,
                'qtyBlocked', q.qty_blocked,
                'qtyConsumed', q.qty_consumed,
                'qtyAvailable', q.qty_available
              )) as supplies
        from specs as z
        inner join supplies as s using (spec_id)
        inner join boxes as b using (box_id)
        inner join depots as d using (depot_id)
        inner join quantities as q using (supply_id)
      group by z.spec_id
    ),
    tasks_of_spec as (
      select  z.spec_id,
              jsonb_agg(jsonb_build_object(
                'taskId', t.task_id,
                'title', t.title,
                'place', t.place,
                'taskCategoryText', tc.task_category_text,
                'taskStatusText', tz.task_status_text
              )) as tasks
        from specs as z
        left join supplies as s using (spec_id)
        left join task_supplies as ts using (supply_id)
        left join tasks as t using (task_id)
        left join task_statuses as tz using (task_status_id)
        left join task_categories as tc using (task_category_id)
      group by z.spec_id
    )
  select z.*,
         zc.spec_category_text,
         zs.spec_subcategory_text,
         coalesce(s.total_available, 0) as total_available,
         coalesce(s.supplies, jsonb_build_array()) as supplies,
         coalesce(t.tasks, jsonb_build_array()) as tasks
  from specs as z
  inner join spec_categories as zc using (spec_category_id)
  inner join spec_subcategories as zs using (spec_subcategory_id)
  left join supplies_of_spec as s using (spec_id)
  left join tasks_of_spec as t using (spec_id)
;
