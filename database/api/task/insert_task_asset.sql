\set function_name api.insert_task_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_assets values ("taskId", "assetId");
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
