\set function_name api.insert_asset_files

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  as $$
    begin
      perform insert_files(files_metadata);
      insert into asset_files
        select  "assetId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "assetId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `assetId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
