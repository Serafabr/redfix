\set function_name api.filter_tasks

drop function if exists :function_name;
create or replace function :function_name (
  in "filterStart" date default '2000-01-01'::date,
  in "filterEnd" date default '2999-12-31'::date,
  out task_id integer,
  out title text,
  out task_status_text text,
  out task_category_text text,
  out task_priority_text text
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
      tp.task_priority_text
    from tasks as t
    inner join task_statuses as ts using (task_status_id)
    inner join task_priorities as tp using (task_priority_id)
    inner join task_categories as tc using (task_category_id)
    where t.created_at >= "filterStart" and t.created_at <= "filterEnd"
    order by t.task_id desc;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;
