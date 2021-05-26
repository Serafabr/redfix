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
      "dateEnd" text;
    begin
      -- set values to variables taskTemplateId and dateEnd
      select
        task_template_id,
        date_end::date::text
        into
        "taskTemplateId",
        "dateEnd"
      from tasks where task_id = "taskId";

      -- TODO: update in whatever way it is necessary

      -- check if finished task belongs to a plan (i.e., check task_template_id is not null)
      if ("taskTemplateId" is null)
        then
          null; -- does nothing
        else
          if (
            select p.periodicity_days is not null
            from periodicities as p
            inner join task_templates as tt using (periodicity_id)
            where tt.task_template_id = "taskTemplateId"
          ) then
            insert into tasks ( -- creates the next task
              title,
              description,
              task_category_id,
              task_priority_id,
              date_start,
              date_limit,
              team_id
            ) select
              tt.title,
              tt.description,
              tt.task_category_id,
              tt.task_priority_id,
              -- date operators: https://www.postgresql.org/docs/12/functions-datetime.html
              date "dateEnd" + integer p.periodicity_days::text - integer p.days_range::text,
              date "dateEnd" + integer p.periodicity_days::text + integer p.days_range::text,
              tt.team_id
            from task_templates as tt
            inner join periodicities as p using (periodicity_id)
            where task_template_id = "taskTemplateId";
          end if;
      end if;
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
