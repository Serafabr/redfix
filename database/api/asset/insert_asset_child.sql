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

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `assetId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
