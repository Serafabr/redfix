drop view if exists api.transfers_between_depots;
create or replace view api.transfers_between_depots as
  select
    a.alloc_id,
    a.created_at,
    a.created_by,
    a.supply_id,
    a.alloc_status_id,
    a.source_depot_id,
    a.target_depot_id,
    a.qty_allocated,
    a.allocated_at,
    a.allocated_by,
    a.qty_proposed,
    a.proposed_at,
    a.proposed_by,
    a.qty_approved,
    a.approved_at,
    a.approved_by
  from allocations as a
  where
    a.source_depot_id is not null and
    a.target_depot_id is not null and
    a.task_id is null
;
