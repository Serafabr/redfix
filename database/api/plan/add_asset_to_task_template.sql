\set function_name api.add_asset_to_task_template

drop function if exists :function_name;
create or replace function :function_name (
  in "taskTemplateId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_template_assets values ("taskTemplateId", "assetId");
      id = "taskTemplateId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `taskTemplateId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
