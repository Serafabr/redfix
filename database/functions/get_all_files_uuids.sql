\set function_name web.get_all_files_uuids

drop function if exists :function_name;
create or replace function :function_name (
  out files_uuids jsonb
)
  language plpgsql
  security definer
  stable
  as $$
    begin
      select coalesce_list((
        select jsonb_agg(uuid) from files
      )) into files_uuids;
    end;
  $$
;

grant execute on function :function_name to cmms_user;
