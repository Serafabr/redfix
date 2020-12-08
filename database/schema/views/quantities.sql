drop view if exists quantities;
create or replace view quantities as
  select q.supply_id,
         q.qty_initial,
         q.qty_blocked,
         q.qty_consumed,
         q.qty_initial - q.qty_blocked - q.qty_consumed as qty_available
  from (
    select  s.supply_id,
            s.qty_initial,
            sum(
              case when t.task_status_id < :'task_status_threshold'::integer
                then ts.qty
                else 0
              end
            ) as qty_blocked,
            sum(
              case when t.task_status_id >= :'task_status_threshold'::integer
                then ts.qty
                else 0
              end
            ) as qty_consumed
    from supplies as s
    left join task_supplies as ts using (supply_id)
    left join tasks as t using (task_id)
    group by s.supply_id, s.qty_initial
  ) as q
;
