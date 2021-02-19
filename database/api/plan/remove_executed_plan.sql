\set function_name api.remove_executed_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "executedPlanId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from executed_plans where executed_plan_id = "executedPlanId";
      id = "executedPlanId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `executedPlanId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
