\set function_name api.get_asset_parents


drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  out parents jsonb
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
            ) as parents
    from asset_parents as ap
    inner join assets as a on (ap.parent_id = a.asset_id)
    where ap.asset_id = "assetId";
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;
