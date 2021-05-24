drop view if exists api.depot_categories;
create or replace view api.depot_categories as
  select
    depot_category_id,
    depot_category_text
  from depot_categories
;
