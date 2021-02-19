\set function_name api.insert_bundle_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "bundleId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into bundle_assets values (
        "bundleId",
        "assetId"
      ) returning bundle_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `bundleId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
