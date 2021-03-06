\set function_name api.modify_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "TITLE" text,
  in "DESCRIPTION" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
  in "taskTemplateId" integer default null,
  in "projectId" integer default null,
  in "PLACE" text default null,
  in "PROGRESS" integer default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "requestId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    declare
      "personId" constant integer = get_person_id();
      "teamId" constant integer = get_team_id();
    begin
      update tasks set
        updated_at = now(),
        updated_by = "personId",
        task_priority_id = "taskPriorityId",
        task_category_id = "taskCategoryId",
        task_template_id = "taskTemplateId",
        project_id = "projectId",
        title = "TITLE",
        description = "DESCRIPTION",
        place = "PLACE",
        progress = "PROGRESS",
        date_start = "dateStart",
        date_end = "dateEnd",
        request_id = "requestId"
      where task_id = "taskId";
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
