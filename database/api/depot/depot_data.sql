drop view if exists api.depot_data;

create or replace view api.depot_data as
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
        inner join balances as q using (supply_id)
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
                'qtyConsumed', os.qty_consumed,
                'qtyBlocked', os.qty_blocked,
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
    )
  select d.*,
         dc.depot_category_text,
         ab.boxes
  from depots as d
  inner join depot_categories as dc using (depot_category_id)
  inner join agg_boxes as ab using (depot_id)
;
