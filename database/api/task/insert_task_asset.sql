\set function_name api.insert_task_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into task_assets values ("taskId", "assetId");
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskId`\n
* `assetId`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
