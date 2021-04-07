\set function_name api.set_monitor_next_read_date

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorId" integer,
  in "nextReadDate" timestamptz,
  out id integer
)
  language plpgsql
  as $$
    begin
      update monitors set next_read_date = "nextReadDate" where monitor_id = "monitorId";
      id = "monitorId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`monitorId` of the modified monitor\n') as new_comment \gset

comment on function :function_name is :'new_comment';
