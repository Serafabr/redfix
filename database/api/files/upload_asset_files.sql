\set function_name api.upload_asset_files

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
      insert into asset_files select "assetId", f.uuid from unnest(files_metadata) as f;
      get diagnostics id = row_count;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the number of processed items\n') as new_comment \gset

comment on function :function_name is :'new_comment';
