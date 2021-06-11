drop view if exists api.tasks;
create or replace view api.tasks as
  select
    t.task_id,
    t.created_at,
    t.updated_at,
    t.created_by,
    t.updated_by,
    t.task_priority_id,
    t.task_category_id,
    t.task_status_id,
    t.task_template_id,
    t.team_id,
    t.project_id,
    t.title,
    t.description,
    t.place,
    t.progress,
    t.date_limit,
    t.date_start,
    t.date_end,
    t.request_id,
    t.todos,
    -- data from joins
    ts.task_status_text,
    tp.task_priority_text,
    tc.task_category_text,
    p.name as created_by_name,
    pp.name as updated_by_name,
    pr.name as project_name,
    r.title as request_title,
    -- list of assets
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'assetId', a.asset_id,
        'assetSf', a.asset_sf,
        'name', a.name,
        'monitors', coalesce_list((
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
        ))
      ) order by a.asset_sf)
      from task_assets as ta
      inner join assets as a using (asset_id)
      where ta.task_id = t.task_id
    )) as assets,
    -- list of events
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'taskEventId', te.task_event_id,
        'taskEvent', te.task_event,
        'createdAt', te.created_at,
        'personId', te.person_id,
        'personName', p.name,
        'teamId', te.team_id,
        'teamName', t1.name,
        'nextTeamId', te.next_team_id,
        'nextTeamName', t2.name,
        'taskStatusText', ts.task_status_text,
        'taskStatusId', te.task_status_id,
        'note', te.note,
        'replyTo', te.reply_to,
        'updatedAt', te.updated_at,
        'isVisible', te.is_visible
      ) order by te.created_at desc)
      from task_events as te
      inner join persons as p using (person_id)
      inner join teams as t1 on (t1.team_id = te.team_id)
      left join teams as t2 on (t2.team_id = te.next_team_id)
      left join task_statuses as ts using (task_status_id)
      where te.task_id = t.task_id
    )) as events,
    -- list of supplies
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'supplyId', a.supply_id,
        'supplySf', s.supply_sf,
        'depotId', s.depot_id,
        'depotSf', d.depot_sf,
        'sourceDepotId', a.source_depot_id,
        'qtyAllocated', a.qty_allocated,
        'qtyProposed', a.qty_proposed,
        'qtyApproved', a.qty_approved
      ) order by s.supply_sf)
      from allocations as a
      inner join supplies as s using (supply_id)
      inner join depots as d using (depot_id)
      where a.task_id = t.task_id
    )) as supplies,
    -- list of files
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'uuid', f.uuid,
        'filename', f.filename,
        'size', f.size,
        'uploadedAt', f.uploaded_at,
        'personName', p.name
      ) order by f.filename)
      from task_files as tf
      inner join files as f using (uuid)
      inner join persons as p using (person_id)
      where tf.task_id = t.task_id
    )) as files
  from tasks as t
  inner join task_statuses as ts using (task_status_id)
  inner join task_priorities as tp using (task_priority_id)
  inner join task_categories as tc using (task_category_id)
  inner join teams as q on (q.team_id = t.team_id)
  inner join persons as p on (t.created_by = p.person_id)
  inner join persons as pp on (t.updated_by = pp.person_id)
  left join projects as pr using (project_id)
  left join requests as r using (request_id)
;
