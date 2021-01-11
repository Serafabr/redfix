\set function_name api.insert_monitor_read

drop function if exists :function_name;
create or replace function :function_name (
  in monitor_id integer,
  in read_at timestamptz,
  in read_value numeric,
  in note text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into monitor_reads values (
        default,
        monitor_id,
        read_at,
        read_value,
        note
      ) returning monitor_read_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `monitorId`\n
* `readAt`\n
* `readValue`\n
\n
Output `id`: `planId` of the new plan
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
