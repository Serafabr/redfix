\set function_name api.get_asset_parents

drop function if exists :function_name;
create or replace function :function_name (
  in "childId" integer,
  out "assetId" integer,
  out "assetSf" text,
  out "name" text,
  out "assetCategoryId" integer,
  out "assetCategoryText" text
)
  returns setof record
  language sql
  stable
  as $$
    select
      a.asset_id as "assetId",
      a.asset_sf as "assetSf",
      a.name as "name",
      a.asset_category_id as "assetCategoryId",
      ac.asset_category_text as "assetCategoryText"
    from asset_parents as ap
    inner join assets as a on (ap.parent_id = a.asset_id)
    inner join asset_categories as ac on (ac.asset_category_id = a.asset_category_id)
    where ap.asset_id = "childId"
    order by a.asset_sf;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;
