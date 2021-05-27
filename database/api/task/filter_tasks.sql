\set function_name api.filter_tasks

drop function if exists :function_name;
create or replace function :function_name (
  in "dateStart0" date default null,
  in "dateStart1" date default null,
  in "dateEnd0" date default null,
  in "dateEnd1" date default null,
  in "dateLimit0" date default null,
  in "dateLimit1" date default null,
  in "createdAt0" date default null,
  in "createdAt1" date default null,
  in "taskId" integer default null,
  in "teams" integer[] default null,
  in "categories" integer[] default null,
  in "statuses" integer[] default null,
  in "priorities" integer[] default null,
  out task_id integer,
  out title text,
  out task_status_text text,
  out task_category_text text,
  out task_priority_text text,
  out created_at timestamptz,
  out date_start timestamptz,
  out date_end timestamptz,
  out date_limit timestamptz,
  out team_name text
)
  returns setof record
  language sql
  stable
  as $$
    select
      t.task_id,
      t.title,
      ts.task_status_text,
      tc.task_category_text,
      tp.task_priority_text,
      t.created_at,
      t.date_start,
      t.date_end,
      t.date_limit,
      tt.name as team_name
    from tasks as t
    inner join task_statuses as ts using (task_status_id)
    inner join task_priorities as tp using (task_priority_id)
    inner join task_categories as tc using (task_category_id)
    inner join teams as tt using (team_id)
    where (
      case when "dateStart0" is null then true else t.date_start >= "dateStart0" and t.date_start <= "dateStart1" end
      and
      case when "dateEnd0" is null then true else t.date_end >= "dateEnd0" and t.date_end <= "dateEnd1" end
      and
      case when "dateLimit0" is null then true else t.date_limit >= "dateLimit0" and t.date_limit <= "dateLimit1" end
      and
      case when "createdAt0" is null then true else t.created_at >= "createdAt0" and t.created_at <= "createdAt1" end
      and
      case when "taskId" is null then true else t.task_id = "taskId" end
      and
      case when "teams" is null then true else t.team_id in (select unnest("teams")) end
      and
      case when "categories" is null then true else t.task_category_id in (select unnest("categories")) end
      and
      case when "statuses" is null then true else t.task_status_id in (select unnest("statuses")) end
      and
      case when "priorities" is null then true else t.task_priority_id in (select unnest("priorities")) end
    )
    order by t.task_id desc;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;
