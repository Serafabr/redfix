drop view if exists api.asset_form_data;

create or replace view api.asset_form_data as
  with
    top_options as (
      select  jsonb_agg(jsonb_build_object(
                'assetId', a.asset_id,
                'assetSf', a.asset_sf,
                'name', a.name,
                'categoryId', a.category,
                'categoryName', a.name
              )) as top_options
        from assets as a
      where a.asset_id = a.category
    ),
    parent_options as (
      select  jsonb_agg(jsonb_build_object(
                'assetId', a.asset_id,
                'assetSf', a.asset_sf,
                'name', a.name,
                'categoryId', a.category,
                'categoryName', aa.name
              )) as parent_options
      from assets as a
      inner join assets as aa on (aa.asset_id = a.category)
    )
  select top_options,
         parent_options
    from top_options,
         parent_options
;
