drop view if exists api.task_statuses;
create or replace view api.task_statuses as
  select
    task_status_id,
    task_status_text
  from task_statuses
;
