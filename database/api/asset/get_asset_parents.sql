\set function_name 'api.get_asset_parents'


drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  out parents jsonb
)
  language sql
  stable
  strict
  as $$
    select  coalesce(
              jsonb_agg(jsonb_build_object(
                'assetId', a.asset_id,
                'assetSf', a.asset_sf,
                'name', a.name
              ) order by a.asset_sf),
              jsonb_build_array()
            ) as children
    from asset_parents as ap
    inner join assets as a using (asset_id)
    where ap.asset_id = "assetId";
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `assetId`\n
\n
Output `parents`: a list of assets that are parents of the asset identified by `assetId`
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee, visitor;
