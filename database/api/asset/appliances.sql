drop view if exists api.appliances;
create or replace view api.appliances as
  select  
    a.asset_id,
    a.asset_sf,
    a.name,
    a.asset_category_id,
    a.location_id,
    a.place,
    a.description,
    -- a.latitude,
    -- a.longitude,
    -- a.area,
    a.manufacturer,
    a.serial_number,
    a.model,
    a.price,
    -- data from joins
    ac.asset_category_text,
    -- list of tasks
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'taskId', t.task_id,
        'title', t.title,
        'taskStatusText', ts.task_status_text,
        'taskPriorityText', tp.task_priority_text,
        'taskCategoryText', tc.task_category_text
      ) order by t.task_id)
      from task_assets as ta
      inner join tasks as t using (task_id)
      inner join task_statuses as ts using (task_status_id)
      inner join task_priorities as tp using (task_priority_id)
      inner join task_categories as tc using (task_category_id)
      where ta.asset_id = a.asset_id
    )) as tasks,
    -- list of monitors
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'monitorId', m.monitor_id,
        'name', m.name,
        'description', m.description,
        'monitorCategoryId', mc.monitor_category_id,
        'monitorCategoryText', mc.monitor_category_text,
        'unit', m.unit,
        'lowerLimit', m.lower_limit,
        'upperLimit', m.upper_limit,
        'reads', coalesce_list((
          -- list of monitor reads
          select jsonb_agg(jsonb_build_object(
            'monitorReadId', r.monitor_read_id,
            'readAt', r.read_at,
            'readValue', r.read_value,
            'note', r.note
          ) order by r.read_at)
          from monitor_reads as r
          where r.monitor_id = m.monitor_id
        ))
      ) order by m.name)
      from monitors as m
      inner join monitor_categories as mc using (monitor_category_id)
      where m.asset_id = a.asset_id
    )) as monitors
  from assets as a
  inner join asset_categories as ac on (a.asset_category_id = ac.asset_category_id)
  where a.asset_category_id <> :'asset_category_facility'::integer
;
