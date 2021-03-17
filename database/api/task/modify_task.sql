\set function_name api.modify_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "title" text,
  in "description" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
  in "teamId" integer,
  in "taskTemplateId" integer default null,
  in "projectId" integer default null,
  in "place" text default null,
  in "progress" integer default null,
  in "dateLimit" date default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "requestId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update tasks as t set (
        updated_at,
        updated_by,
        task_priority_id,
        task_category_id,
        task_template_id,
        project_id,
        title,
        description,
        place,
        progress,
        date_limit,
        date_start,
        date_end,
        request_id
      ) = (select new_values.*)
      from (select
        now(),
        get_person_id(),
        "taskPriorityId",
        "taskCategoryId",
        "taskTemplateId",
        "projectId",
        "title",
        "description",
        "place",
        "progress",
        "dateLimit",
        "dateStart",
        "dateEnd",
        "requestId"
      ) as new_values
      where t.task_id = "taskId";
      insert into task_events values (
        default,
        "taskId",
        'modify',
        now(),
        get_person_id(),
        "teamId",
        null,
        null,
        'Alteração da tarefa',
        null,
        null,
        true
      );
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'\n') as new_comment \gset

comment on function :function_name is :'new_comment';
