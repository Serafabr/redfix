drop function if exists api.insert_task_files;

create or replace function api.insert_task_files (
  in task_id integer,
  in files_metadata file_metadata[],
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_files as tf
        select  task_id,
                f.filename,
                f.uuid,
                f.size,
                get_person_id(),
                now()
        from unnest(files_metadata) as f;
      id = task_id;
    end;
  $$
;

comment on function api.insert_task_files is E'
Input fields (* are mandatory):\n
- taskId *\n
- filesMetadata.filename *\n
- filesMetadata.uuid *\n
- filesMetadata.size *\n
';
