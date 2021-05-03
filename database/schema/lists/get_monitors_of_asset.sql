\set function_name get_monitors_of_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'monitorId', m.monitor_id,
          'name', m.name,
          'description', m.description,
          'monitorCategoryId', mc.monitor_category_id,
          'monitorCategoryText', mc.monitor_category_text,
          'unit', m.unit,
          'lowerLimit', m.lower_limit,
          'upperLimit', m.upper_limit,
          'reads', get_reads_of_monitor(m.monitor_id)
        ) order by m.name) as l
      from monitors as m
      inner join monitor_categories as mc using (monitor_category_id)
      where m.asset_id = "assetId"
    ) as j
  $$
;
