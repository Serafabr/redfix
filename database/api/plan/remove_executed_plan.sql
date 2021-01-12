\set function_name api.remove_executed_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "executedPlanId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from executed_plans where executed_plan_id = "executedPlanId";
      id = "executedPlanId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `executedPlanId`\n
\n
Output `id`: the same as `executedPlanId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
