\set function_name api.insert_bundle_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "bundleId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into bundle_assets values (
        "bundleId",
        "assetId"
      ) returning bundle_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `bundleId`\n
* `assetId`\n
\n
Output `id`: the same as `bundleId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
