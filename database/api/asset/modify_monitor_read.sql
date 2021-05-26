\set function_name api.modify_monitor_read

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorReadId" integer,
  in "readAt" timestamptz,
  in "readValue" numeric,
  in "NOTE" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update monitor_reads set
        read_at = "readAt",
        read_value = "readValue",
        note = "NOTE"
      where monitor_read_id = "monitorReadId";
      id = "monitorReadId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `monitorReadId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
