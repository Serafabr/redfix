\set function_name api.remove_task_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "supplyId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from task_supplies where task_id = "taskId" and supply_id = "supplyId";
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
