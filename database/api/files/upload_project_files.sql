\set function_name api.upload_project_files

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  as $$
    begin
      perform insert_files(files_metadata);
      insert into project_files
        select  "projectId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "projectId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `projectId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
