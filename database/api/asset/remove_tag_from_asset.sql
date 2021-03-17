\set function_name api.remove_tag_from_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "tagId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
    begin
      delete from asset_tags where asset_id = "assetId" and tag_id = "tagId";
      id = "assetId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `assetId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
