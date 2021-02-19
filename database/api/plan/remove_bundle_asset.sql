\set function_name api.remove_bundle_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "bundleId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from bundle_assets where bundle_id = "bundleId" and asset_id = "assetId";
      id = "bundleId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `bundleId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
