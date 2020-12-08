\set function_name api.remove_task_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      line_count integer;
    begin
      select count(*) into line_count from task_assets as ta where ta.task_id = "taskId";
      if line_count = 1
        then raise exception '%', get_exception_message(201);
        else delete from task_assets as ta where ta.task_id = "taskId" and ta.asset_id = "assetId";
      end if;
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `assetId`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
