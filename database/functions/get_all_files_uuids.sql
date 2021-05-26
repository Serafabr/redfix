\set function_name web.get_all_files_uuids

drop function if exists :function_name;
create or replace function :function_name (
  out uuids_result jsonb
)
  language plpgsql
  stable
  security definer
  as $$
    -- declare
    --   files_tables record;
    --   uuids_to_append uuid[];
    begin
      -- for files_tables in
      --   select table_name
      --     from information_schema.tables
      --   where table_schema = 'public' and table_name ~ '^.+_files$'
      -- loop
      --   raise notice E'\n\nCurrent table: % \n\n', files_tables.table_name;
      --   execute format('select array_agg(uuid) from %I', files_tables.table_name) into uuids_to_append;
      --   uuids_result = array_cat(uuids_result, uuids_to_append);
      -- end loop;
      select coalesce(jsonb_agg(uuid), jsonb_build_array()) into uuids_result from files;
    end;
  $$
;

grant execute on function :function_name to cmms_user;
