drop view if exists quantities cascade;
create or replace view quantities as
  select
    q.supply_id,
    q.qty_initial,
    q.qty_blocked,
    q.qty_consumed,
    q.qty_initial - q.qty_blocked - q.qty_consumed as qty_available
  from (
    select
      s.supply_id,
      s.qty_initial,
      sum(coalesce(ts.qty_approved, ts.qty_proposed, 0)) as qty_blocked,
      sum(coalesce(qty_consumed, 0)) as qty_consumed
    from supplies as s
    left join task_supplies as ts using (supply_id)
    group by s.supply_id, s.qty_initial
  ) as q
;
