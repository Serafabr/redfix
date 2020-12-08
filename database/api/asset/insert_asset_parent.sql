\set function_name api.insert_asset_parent

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "parentId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into asset_parents values ("parentId", "assetId");
      id = "assetId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `assetId`\n
* `parentId`\n
\n
Output `id`: the same as `assetId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
