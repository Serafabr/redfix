\set function_name api.insert_asset_child

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
      insert into asset_parents values ("assetId", "childId");
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
