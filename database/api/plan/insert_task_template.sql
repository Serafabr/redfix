\set function_name api.insert_task_template

drop function if exists :function_name;
create or replace function :function_name (
  in "assets" integer[],
  in "planId" integer,
  in "title" text,
  in "description" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      if array_length("assets", 1) is null
        then raise exception '%', get_exception_message(201);
      end if;
      insert into task_templates values (
        default,
        "planId",
        "title",
        "description",
        "taskCategoryId",
        "taskPriorityId"
      ) returning task_template_id into id;

      insert into task_template_assets select id, unnest("assets");

    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `taskTemplateId` of the new task template\n') as new_comment \gset

comment on function :function_name is :'new_comment';
