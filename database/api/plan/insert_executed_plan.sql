\set function_name api.insert_executed_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in "startedAt" timestamptz,
  in "finishedAt" timestamptz,
  in "note" text default null,
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

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: `executedPlanId` of the new executed plan\n') as new_comment \gset

comment on function :function_name is :'new_comment';
