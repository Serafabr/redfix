drop function if exists api.remove_task_file;

create or replace function api.remove_task_file (
  in task_id integer,
  in uuid uuid,
  out id integer
)
  language plpgsql
  as $$
    declare
      uuidsearch uuid;
    begin
      id = task_id;
      uuidsearch = uuid;
      delete from task_files as ts
        where ts.task_id = id and
              ts.uuid = uuidsearch;
    end;
  $$
;
