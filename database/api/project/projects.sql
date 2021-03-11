drop view if exists api.projects;
create or replace view api.projects as
  select  p.project_id,
          p.name,
          p.description,
          p.date_start,
          p.date_end,
          p.is_active,
          get_tasks_of_project(p.project_id) as tasks
  from projects as p
;
