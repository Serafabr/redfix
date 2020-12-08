\set function_name api.remove_asset_tag

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "tagId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
    begin
      delete from asset_tags as a
      where
        a.asset_id = "assetId" and
        a.tag_id = "tagId"
      returning a.asset_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `assetId`\n
* `tagId`\n
\n
Output `id`: the same as `assetId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
