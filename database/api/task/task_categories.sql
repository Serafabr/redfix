drop view if exists api.task_categories;
create or replace view api.task_categories as
  select
    task_category_id,
    task_category_text
  from task_categories
;
