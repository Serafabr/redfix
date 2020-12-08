\set function_name api.insert_asset_tag

drop function if exists :function_name;
create or replace function :function_name (
  in asset_id integer,
  in tag_id integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into asset_tags as a values (
        asset_id,
        tag_id
      ) returning a.asset_id into id;
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
