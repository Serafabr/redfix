\set function_name get_reads_of_monitor

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'monitorReadId', m.monitor_read_id,
          'readAt', m.read_at,
          'readValue', m.read_value,
          'note', m.note
        ) order by m.read_at) as l
      from monitor_reads as m
      where m.monitor_id = "monitorId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
