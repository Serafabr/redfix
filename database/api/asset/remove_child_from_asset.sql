\set function_name api.remove_child_from_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "childId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from asset_parents where parent_id = "assetId" and asset_id = "childId";
      id = "assetId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `assetId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
