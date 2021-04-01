\set function_name api.modify_task_template

drop function if exists :function_name;
create or replace function :function_name (
  in "taskTemplateId" integer,
  in "title" text,
  in "description" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
  in "planId" integer,
  in "periodicityId" integer default null,
  in "daysRange" integer default null,
  in "nextTeamId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update task_templates set (
        title,
        description,
        task_category_id,
        task_priority_id,
        plan_id,
        periodicity_id,
        next_team_id
      ) = (select new_values.*)
      from (select
        "title",
        "description",
        "taskCategoryId",
        "taskPriorityId",
        "planId",
        "periodicityId",
        "nextTeamId"
      ) as new_values
      where task_template_id = "taskTemplateId";
      id = "taskTemplateId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `taskTemplateId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
