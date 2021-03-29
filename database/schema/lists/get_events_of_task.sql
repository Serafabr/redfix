\set function_name get_events_of_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
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
        ) order by te.created_at desc) as l
      from task_events as te
      inner join persons as p using (person_id)
      inner join teams as t on (t.team_id = te.team_id)
      left join teams as tt on (tt.team_id = te.next_team_id)
      left join task_statuses as ts using (task_status_id)
      where te.task_id = "taskId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
