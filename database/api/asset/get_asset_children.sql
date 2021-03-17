\set function_name api.get_asset_children

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  out children jsonb
)
  language sql
  stable
  as $$
    select  coalesce(
              jsonb_agg(jsonb_build_object(
                'assetId', a.asset_id,
                'assetSf', a.asset_sf,
                'name', a.name
              ) order by a.asset_sf),
              '[]'::jsonb
            ) as children
    from asset_parents as ap
    inner join assets as a using (asset_id)
    where ap.parent_id = "assetId";
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;

select generate_api_documentation(:'function_name',E'Output `children`: a list of assets that are children of the asset identified by `assetId\n') as new_comment \gset

comment on function :function_name is :'new_comment';
