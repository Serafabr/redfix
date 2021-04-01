\set function_name api.finish_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      "taskTemplateId" integer;
    begin
      -- check if task has a template
      select task_template_id into "taskTemplateId" from tasks where task_id = "taskId";

      if ("taskTemplateId" is null)
        then null; -- does nothing
        else insert into tasks (
          title,
          description,
          task_category_id,
          task_priority_id,
          date_start,
          date_limit,
          team_id,
        ) select
          title,
          description,
          task_category_id,
          task_priority_id,
          now() + periodicity_id - days_range
          now() + periodicity_id + days_range,
          team_id
        from task_templates where task_template_id = "taskTemplateId";
      end if;
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
