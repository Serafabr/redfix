\set function_name insert_files

drop function if exists :function_name;
create or replace function :function_name (
  in files_metadata files[]
)
  returns void
  language plpgsql
  strict
  as $$
    begin
      insert into files
      select  f.uuid,
              f.filename,
              f.size,
              now(),
              get_person_id()
      from unnest(files_metadata) as f;
    end;
  $$
;
