\set function_name insert_files

drop function if exists :function_name;
create or replace function :function_name (
  in files_metadata files[]
)
  returns void
  language plpgsql
  strict
  as $$
    declare
      "personId" constant integer = get_person_id();
    begin
      insert into files select
        fm.uuid,
        fm.filename,
        fm.size,
        fm.mimetype,
        now(),
        "personId"
      from unnest(files_metadata) as fm;
    end;
  $$
;
