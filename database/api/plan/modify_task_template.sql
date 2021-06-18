\set function_name api.modify_task_template

drop function if exists :function_name;
create or replace function :function_name (
  in "taskTemplateId" integer,
  in "TITLE" text,
  in "DESCRIPTION" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
  in "planId" integer,
  in "periodicityId" integer,
  in "nextTeamId" integer,
  in "JOBS" job_type[] default array[]::job_type[],
  out id integer
)
  language plpgsql
  as $$
    begin
      update task_templates set
        title = "TITLE",
        description = "DESCRIPTION",
        task_category_id = "taskCategoryId",
        task_priority_id = "taskPriorityId",
        plan_id = "planId",
        periodicity_id = "periodicityId",
        next_team_id = "nextTeamId",
        jobs = "JOBS"
      where task_template_id = "taskTemplateId";
      id = "taskTemplateId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `taskTemplateId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
