\set function_name api.insert_executed_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in "startedAt" timestamptz,
  in "finishedAt" timestamptz,
  in "note" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into executed_plans values (
        default,
        "planId",
        "startedAt",
        "finishedAt",
        "note"
      ) returning executed_plan_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `planId`\n
* `startedAt`\n
* `finishedAt`\n
\n
Output `id`: `executedPlanId` of the new executed plan
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
