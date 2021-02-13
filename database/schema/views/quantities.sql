drop view if exists quantities cascade;
create or replace view quantities as
  select q.supply_id,
         q.qty_initial,
         q.qty_blocked,
         q.qty_used,
         q.qty_initial - q.qty_blocked - q.qty_used as qty_available
  from (
    select  s.supply_id,
            s.qty_initial,
            sum(coalesce(qty_allowed, qty_planned, 0)) as qty_blocked,
            sum(coalesce(qty_used, 0)) as qty_used
    from supplies as s
    left join task_supplies as ts using (supply_id)
    group by s.supply_id, s.qty_initial
  ) as q
;
