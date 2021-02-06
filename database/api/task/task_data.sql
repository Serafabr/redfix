drop view if exists api.task_data;
create or replace view api.task_data as
  select  t.task_id,
          t.created_at,
          t.updated_at,
          t.created_by,
          t.updated_by,
          t.task_priority_id,
          t.task_category_id,
          t.project_id,
          t.title,
          t.description,
          t.place,
          t.progress,
          t.date_limit,
          t.date_start,
          t.date_end,
          t.request_id,
          t.team_id,
          q.name as team_name,
          t.next_team_id,
          qq.name as next_team_name,
          t.task_status_id,
          -- aditional data from joins:
          ts.task_status_text,
          tp.task_priority_text,
          tc.task_category_text,
          p.name as created_by_name,
          pp.name as updated_by_name,
          pr.name as project_name,
          r.title as request_title,
          -- aggregates:
          a.assets,
          e.events,
          coalesce(s.supplies, jsonb_build_array()) as supplies,
          coalesce(f.files, jsonb_build_array()) as files,
          so.send_options,
          mo.move_options,
          aa.asset_options
  from tasks as t
  inner join task_statuses as ts using (task_status_id)
  inner join task_priorities as tp using (task_priority_id)
  inner join task_categories as tc using (task_category_id)
  inner join teams as q on (q.team_id = t.team_id)
  inner join persons as p on (t.created_by = p.person_id)
  inner join persons as pp on (t.updated_by = pp.person_id)
  left join teams as qq on (qq.team_id = t.next_team_id)
  left join projects as pr using (project_id)
  left join requests as r using (request_id)
  left join (
    select  ta.task_id,
            jsonb_agg(jsonb_build_object(
              'assetId', a.asset_id,
              'assetSf', a.asset_sf,
              'name', a.name,
              'assetCategoryId', a.asset_category_id,
              'assetCategoryText', ac.asset_category_text
            ) order by a.asset_sf) as assets
      from task_assets as ta
      inner join assets as a using (asset_id)
      inner join asset_categories as ac using (asset_category_id)
      group by ta.task_id
  ) as a using (task_id)
  left join (
    select  ts.task_id,
            jsonb_agg(jsonb_build_object(
              'specId', s.spec_id,
              'supplyId', s.supply_id,
              'supplySf', s.supply_sf,
              'boxId', b.box_id,
              'boxSf', b.box_sf,
              'depotId', d.depot_id,
              'depotSf', d.depot_sf,
              'qty', ts.qty,
              'price', s.price,
              'totalPrice', ts.qty * s.price,
              'name', z.name,
              'unit', z.unit
            ) order by d.depot_sf, b.box_sf, s.supply_sf) as supplies
    from task_supplies as ts
    inner join supplies as s using (supply_id)
    inner join boxes as b using (box_id)
    inner join depots as d using (depot_id)
    inner join specs as z using (spec_id)
    group by ts.task_id
  ) as s using (task_id)
  left join (
    select  tf.task_id,
            jsonb_agg(jsonb_build_object(
              'uuid', f.uuid,
              'filename', f.filename,
              'size', f.size,
              'uploadedAt', f.uploaded_at,
              'personName', p.name
            ) order by f.filename) as files
    from task_files as tf
    inner join files as f using (uuid)
    inner join persons as p using (person_id)
    group by tf.task_id
  ) as f using (task_id)
  left join (
    select  te.task_id,
            jsonb_agg(jsonb_build_object(
              'taskEventId', te.task_event_id,
              'taskEventName', te.task_event_name,
              'createdAt', te.created_at,
              'personId', te.person_id,
              'personName', p.name,
              'teamId', te.team_id,
              'teamName', t.name,
              'nextTeamId', te.next_team_id,
              'nextTeamName', tt.name,
              'taskStatusText', ts.task_status_text,
              'taskStatusId', te.task_status_id,
              'note', te.note,
              'replyTo', te.reply_to,
              'updatedAt', te.updated_at,
              'isVisible', te.is_visible
            ) order by te.created_at desc) as events
    from task_events as te
    inner join persons as p using (person_id)
    inner join teams as t on (t.team_id = te.team_id)
    left join teams as tt on (tt.team_id = te.next_team_id)
    left join task_statuses as ts using (task_status_id)
    group by te.task_id
  ) as e using (task_id)
  left join (
    select  t.task_id,
            jsonb_agg(jsonb_build_object(
              'taskStatusId', s.task_status_id,
              'taskStatusText', s.task_status_text
            ) order by s.task_status_text) as move_options
    from task_statuses as s
    inner join tasks as t on (t.task_status_id <> s.task_status_id)
    group by t.task_id
  ) as mo using (task_id)
  left join (
    select  t.task_id,
            jsonb_agg(jsonb_build_object(
              'teamId', q.team_id,
              'name', q.name
            ) order by q.name) as send_options
    from teams as q
    inner join tasks as t on (t.team_id <> q.team_id)
    where q.is_active and t.next_team_id is null
    group by t.task_id
  ) as so using (task_id)
  cross join (
    select  jsonb_agg(jsonb_build_object(
              'assetId', a.asset_id,
              'assetSf', a.asset_sf,
              'name', a.name
            ) order by a.asset_sf) as asset_options
    from assets as a
  ) as aa
;