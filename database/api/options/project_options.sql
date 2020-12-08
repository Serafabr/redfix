drop view if exists api.project_options;
create or replace view api.project_options as
  select  coalesce(
            jsonb_agg(jsonb_build_object(
              'taskId', t.task_id,
              'title', t.title
            ) order by t.task_id desc)
          , jsonb_build_array()) as task_options
  from tasks as t
  where t.task_status_id < :'task_status_threshold'::integer
;
