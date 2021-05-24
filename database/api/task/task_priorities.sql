drop view if exists api.task_priorities;
create or replace view api.task_priorities as
  select
    task_priority_id,
    task_priority_text
  from task_priorities
;
