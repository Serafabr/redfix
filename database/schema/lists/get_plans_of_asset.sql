\set function_name get_plans_of_asset

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
          'planId', p.plan_id,
          'name', p.name,
          'description', p.description,
          'depotId', p.depot_id,
          'taskTemplates', get_task_templates_of_plan(p.plan_id)
        ) order by p.plan_id) as l
      from task_template_assets as ta
      inner join task_templates as tt using (task_template_id)
      inner join plans as p using (plan_id)
      where ta.asset_id = "assetId"
    ) as j
  $$
;
