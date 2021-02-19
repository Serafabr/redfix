\set function_name api.insert_monitor

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "description" text,
  in "unit" text,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into monitors values (
        default,
        now(),
        now(),
        default,
        default,
        "name",
        "description",
        "unit",
        "assetId"
      ) returning monitor_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'Output `id`: `monitorId` of the new monitor\n') as new_comment \gset

comment on function :function_name is :'new_comment';
