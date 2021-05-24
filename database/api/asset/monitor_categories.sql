drop view if exists api.monitor_categories;
create or replace view api.monitor_categories as
  select
    monitor_category_id,
    monitor_category_text
  from monitor_categories
;
