\set function_name api.remove_asset_child

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "childId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from asset_parents where parent_id = "assetId" and asset_id = "childId";
      id = "assetId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `assetId`\n
* `childId`\n
\n
Output `id`: the same as `assetId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
