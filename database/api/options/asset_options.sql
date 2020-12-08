drop view if exists api.asset_options;
create or replace view api.asset_options as
  select  ac.asset_category_id,
          ac.asset_category_text,
          po.parent_options
  from (
    select  a.asset_category_id,
            jsonb_agg(jsonb_build_object(
              'assetId', a.asset_id,
              'assetSf', a.asset_sf,
              'name', a.name,
              'assetCategoryId', a.asset_category_id
            ) order by a.asset_sf) as parent_options
    from assets as a
    group by a.asset_category_id
  ) as po
  inner join asset_categories as ac using (asset_category_id)
;

