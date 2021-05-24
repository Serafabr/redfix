drop view if exists api.supply_categories;
create or replace view api.supply_categories as
  select
    supply_category_id,
    supply_category_text
  from supply_categories
;
