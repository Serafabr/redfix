\set function_name api.modify_monitor_read

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorReadId" integer,
  in "readAt" timestamptz,
  in "readValue" numeric,
  in note text default null,
  out id integer
)
  language plpgsql
  as $$
    declare
      new_note alias for note;
    begin
      update monitor_reads set (
        read_at,
        read_value,
        note
      ) = (
        "readAt",
        "readValue",
        new_note
      ) where monitor_read_id = "monitorReadId";
      id = "monitorReadId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `monitorReadId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
