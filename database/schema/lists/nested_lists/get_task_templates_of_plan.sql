\set function_name get_task_templates_of_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'taskTemplateId', t.task_template_id,
          'title', t.title
        ) order by t.task_template_id) as l
      from task_templates as t
      where t.plan_id = "planId"
    ) as j
  $$
;
