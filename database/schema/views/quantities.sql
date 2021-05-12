drop view if exists quantities cascade;
create or replace view quantities as
  select
    coalesce(i.depot_id,o.depot_id) as depot_id,
    coalesce(i.supply_id,o.supply_id) as supply_id,
    -- inputs
    coalesce(i.total_inputs,0) as total_inputs,
    coalesce(i.currently_proposed_inputs,0) as currently_proposed_inputs,
    coalesce(i.currently_approved_inputs,0) as currently_approved_inputs,
    coalesce(i.total_proposed_inputs,0) as total_proposed_inputs,
    coalesce(i.total_approved_inputs,0) as total_approved_inputs,
    -- outputs
    coalesce(o.total_outputs,0) as total_outputs,
    coalesce(o.currently_proposed_outputs,0) as currently_proposed_outputs,
    coalesce(o.currently_approved_outputs,0) as currently_approved_outputs,
    coalesce(o.total_proposed_outputs,0) as total_proposed_outputs,
    coalesce(o.total_approved_outputs,0) as total_approved_outputs
  from (
    select
      a.target_depot_id as depot_id,
      a.supply_id as supply_id,
      sum(case when a.alloc_status_id = 1 then a.qty_allocated else 0 end) as total_inputs,
      sum(case when a.alloc_status_id = 2 then a.qty_proposed else 0 end) as currently_proposed_inputs,
      sum(case when a.alloc_status_id = 3 then a.qty_approved else 0 end) as currently_approved_inputs,
      sum(coalesce(a.qty_proposed,0)) as total_proposed_inputs,
      sum(coalesce(a.qty_approved,0)) as total_approved_inputs
    from allocations as a
    where a.target_depot_id is not null
    group by target_depot_id, supply_id
  ) as i
  full outer join (
    select
      a.source_depot_id as depot_id,
      a.supply_id as supply_id,
      sum(case when a.alloc_status_id = 1 then a.qty_allocated else 0 end) as total_outputs,
      sum(case when a.alloc_status_id = 2 then a.qty_proposed else 0 end) as currently_proposed_outputs,
      sum(case when a.alloc_status_id = 3 then a.qty_approved else 0 end) as currently_approved_outputs,
      sum(coalesce(a.qty_proposed,0)) as total_proposed_outputs,
      sum(coalesce(a.qty_approved,0)) as total_approved_outputs
    from allocations as a
    where a.source_depot_id is not null
    group by source_depot_id, supply_id
  ) as o on (i.depot_id = o.depot_id and i.supply_id = o.supply_id)
;
