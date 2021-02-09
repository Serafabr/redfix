\set function_name get_files_of_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select listify_null(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'uuid', f.uuid,
          'filename', f.filename,
          'size', f.size,
          'uploadedAt', f.uploaded_at,
          'personName', p.name
        ) order by f.filename) as l
      from task_files as tf
      inner join files as f using (uuid)
      inner join persons as p using (person_id)
      where tf.task_id = "taskId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
