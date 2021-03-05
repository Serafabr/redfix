\set function_name api.upload_spec_files

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  as $$
    begin
      perform insert_files(files_metadata);
      insert into spec_files
        select  "specId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "specId";
    end;
  $$
;

grant execute on function :function_name to coordinator;

select generate_api_documentation(:'function_name',E'the same as `specId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
