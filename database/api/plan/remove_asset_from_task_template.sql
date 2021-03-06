\set function_name api.remove_asset_from_task_template

drop function if exists :function_name;
create or replace function :function_name (
  in "taskTemplateId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      line_count integer;
    begin
      select count(*) into line_count from task_template_assets as ta where ta.task_template_id = "taskTemplateId";
      if line_count = 1
        then perform raise_exception(201);
        else delete from task_template_assets as ta where ta.task_template_id = "taskTemplateId" and ta.asset_id = "assetId";
      end if;
      id = "taskTemplateId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
