\set function_name api.generate_plan_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskTemplateId" integer,
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      tt record;
      assets integer[];
      new_task_id integer;
    begin
      select * into tt from task_templates where task_template_id = "taskTemplateId";
      select array_agg(tta.asset_id) into assets
        from task_template_assets as tta
        where tta.task_template_id = "taskTemplateId"
      group by tta.task_template_id;  
      select api.insert_task(
        assets,
        tt.title,
        tt.description,
        tt.task_priority_id,
        tt.task_category_id,
        "teamId",
        "planId"
      ) into new_task_id;
      -- select api.send_task(
      --   new_task_id,
      --   "teamId",
      --   tt.next_team_id,
      --   'MENSAGEM'
      -- );
      id = new_task_id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`taskTemplateId` of the new task template\n') as new_comment \gset

comment on function :function_name is :'new_comment';
