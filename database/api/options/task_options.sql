drop view if exists api.task_options;
create or replace view api.task_options as
  with
    category_options as (
      select  jsonb_agg(jsonb_build_object(
                'taskCategoryId', task_category_id,
                'taskCategoryText', task_category_text
              )) as category_options
      from task_categories
    ),
    priority_options as (
      select  jsonb_agg(jsonb_build_object(
                'taskPriorityId', task_priority_id,
                'taskPriorityText', task_priority_text
              )) as priority_options
      from task_priorities
    ),
    project_options as (
      select  jsonb_agg(jsonb_build_object(
                'projectId', p.project_id,
                'name', p.name,
                'description', p.description
              )) as project_options
      from projects as p
      where p.is_active
    ),
    asset_options as (
      select  jsonb_agg(jsonb_build_object(
                'assetId', a.asset_id,
                'assetSf', a.asset_sf,
                'name', a.name,
                'assetCategoryId', ac.asset_category_id,
                'assetCategoryText', ac.asset_category_text
              )) as asset_options
      from assets as a
      inner join asset_categories as ac using (asset_category_id)
    )
  select  category_options,
          priority_options,
          coalesce(project_options, jsonb_build_array()) as project_options,
          asset_options
  from  category_options,
        priority_options,
        project_options,
        asset_options
;
