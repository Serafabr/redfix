\set function_name api.insert_project_files

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  strict
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

comment on function :function_name is E'
Mandatory input(s):\n
* `projectId`\n
* `filesMetadata.filename`\n
* `filesMetadata.uuid`\n
* `filesMetadata.size`\n
\n
Output `id`: the same as `projectId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
