drop view if exists quantities cascade;
create or replace view quantities as
  select
    d.depot_id,
    coalesce(i.supply_id,o.supply_id) as supply_id,
    coalesce(i.qty_allocated,0) - coalesce(o.qty_allocated,0) as qty_available,
    coalesce(i.qty_proposed,0) - coalesce(o.qty_proposed,0) as qty_proposed,
    coalesce(i.qty_approved,0) - coalesce(o.qty_approved,0) as qty_approved
  from depots as d
  inner join (
    select
      a.target_depot_id,
      a.supply_id,
      sum(case when a.alloc_status_id = 1 then a.qty_allocated else 0 end) as qty_allocated,
      sum(case when a.alloc_status_id = 2 then a.qty_proposed else 0 end) as qty_proposed,
      sum(case when a.alloc_status_id = 3 then a.qty_approved else 0 end) as qty_approved
    from allocations as a
    group by target_depot_id, supply_id
  ) as i on (i.target_depot_id = d.depot_id)
  inner join (
    select
      a.source_depot_id,
      a.supply_id,
      sum(case when a.alloc_status_id = 1 then a.qty_allocated else 0 end) as qty_allocated,
      sum(case when a.alloc_status_id = 2 then a.qty_proposed else 0 end) as qty_proposed,
      sum(case when a.alloc_status_id = 3 then a.qty_approved else 0 end) as qty_approved
    from allocations as a
    group by source_depot_id, supply_id
  ) as o on (o.source_depot_id = d.depot_id)
;
