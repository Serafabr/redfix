\set function_name api.insert_task_files

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in files_metadata file_metadata[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into file_metadata
        select  f.uuid,
                f.filename,
                f.size,
                now(),
                get_person_id()
        from unnest(files_metadata) as f;
      insert into task_files
        select  "taskId",
                f.uuid
        from unnest(files_metadata) as f; 
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskId`\n
* `filesMetadata.filename`\n
* `filesMetadata.uuid`\n
* `filesMetadata.size`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
