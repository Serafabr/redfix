drop view if exists api.asset_categories;
create or replace view api.asset_categories as
  select
    asset_category_id,
    asset_category_text,
    description
  from asset_categories
;
