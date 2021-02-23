\set function_name api.generate_plan_tasks

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      new_task_id integer;
      assets integer[];
      tt record;
    begin
      for tt in
        select * from task_templates where plan_id = "planId"
      loop
        select array_agg(asset_id) into assets
          from task_template_assets as tta
        where tta.task_template_id = tt.task_template_id
        group by tta.task_category_id;
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
      end loop;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`taskTemplateId` of the new task template\n') as new_comment \gset

comment on function :function_name is :'new_comment';
