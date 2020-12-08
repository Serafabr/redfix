create or replace view balances as
  with
    finished as (
      select ts.task_id, ts.supply_id, ts.qty, t.task_status_id
        from task_supplies as ts
        inner join tasks as t using (task_id)
      where t.task_status_id >= get_constant_value('task_status_threshold')::integer
    ),
    unfinished as (
      select ts.task_id, ts.supply_id, ts.qty, t.task_status_id
        from task_supplies as ts
        inner join tasks as t using (task_id)
      where t.task_status_id < get_constant_value('task_status_threshold')::integer
    ),
    quantities as (
      select s.supply_id,
             s.qty_initial,
             sum(coalesce(f.qty, 0)) as qty_consumed,
             sum(coalesce(u.qty, 0)) as qty_blocked
        from supplies as s
        full outer join finished as f using (supply_id)
        full outer join unfinished as u using (supply_id)
      group by s.supply_id, s.qty_initial
    )
    select supply_id,
           qty_initial,
           qty_blocked,
           qty_consumed,
           qty_initial - qty_blocked - qty_consumed as qty_available
      from quantities
;

create or replace view newbalances as
  with
    all_task_supplies as (
      select  ts.supply_id,
              case when t.task_status_id >= get_constant_value('task_status_threshold')::integer
                then ts.qty
                else 0
              end as qty_consumed,
              case when t.task_status_id < get_constant_value('task_status_threshold')::integer
                then ts.qty
                else 0
              end as qty_blocked
      from tasks as t
      inner join task_supplies as ts using (task_id)
    )
  select  s.supply_id,
          s.qty_initial,
          sum(coalesce(a.qty_consumed, 0)) as qty_consumed,
          sum(coalesce(a.qty_blocked, 0)) as qty_blocked,
          s.qty_initial - sum(coalesce(a.qty_blocked, 0) + coalesce(a.qty_consumed, 0)) as qty_available
    from supplies as s
    left join all_task_supplies as a using (supply_id)
  group by s.supply_id, s.qty_initial
;
