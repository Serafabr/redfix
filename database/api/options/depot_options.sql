drop view if exists api.depot_options;
create or replace view api.depot_options as
  select  depot_category_id,
          depot_category_text
  from depot_categories
;
