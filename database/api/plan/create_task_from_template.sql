\set function_name api.create_task_from_template

drop function if exists :function_name;
create or replace function :function_name (
  in "taskTemplateId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      tt record;
      assets integer[];
      new_task_id integer;
      "periodicityDays" integer;
      "personId" integer;
      "teamId" integer;
    begin
      "personId" = get_person_id();
      "teamId" = get_team_id("personId");
      select ttt.* into tt
      from task_templates as ttt
      where ttt.task_template_id = "taskTemplateId";
      -- check if periodicity_id is 0
      if (tt.periodicity_id = 0) then
        -- insert into tasks
        insert into tasks (
          title,
          description,
          task_priority_id,
          task_category_id,
          task_template_id,
          team_id
        ) values (
          tt.title,
          tt.description,
          tt.task_priority_id,
          tt.task_category_id,
          "taskTemplateId",
          "teamId"
        ) returning task_id into new_task_id;
        -- insert into task_assets
        insert into task_assets select
          new_task_id,
          tta.asset_id
        from task_template_assets as tta
        where tta.task_template_id = "taskTemplateId";
        -- insert into task_events
        insert into task_events values (
          default,
          new_task_id,
          'creation',
          now(),
          "personId",
          "teamId",
          null,
          null,
          'Criação da tarefa.',
          null,
          null,
          true
        );
        -- send task
        perform api.send_task(
          new_task_id,
          tt.next_team_id,
          'MENSAGEM'
        );
        id = new_task_id;
      else
        perform raise_exception(501);
      end if;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`taskTemplateId` of the new task template\n') as new_comment \gset

comment on function :function_name is :'new_comment';
