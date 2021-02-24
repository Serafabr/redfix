\set function_name api.insert_monitor_read

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorId" integer,
  in "readAt" timestamptz,
  in "readValue" numeric,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into monitor_reads values (
        default,
        "monitorId",
        "readAt",
        "readValue",
        "note"
      ) returning monitor_read_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the new `monitorReadId`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
