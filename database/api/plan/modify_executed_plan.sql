\set function_name api.modify_executed_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "executedPlanId" integer,
  in "startedAt" timestamptz,
  in "finishedAt" timestamptz,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    declare
      new_note alias for "note";
    begin
      update executed_plans set (
        started_at,
        finished_at,
        note
      ) = (
        "startedAt",
        "finishedAt",
        new_note
      ) where executed_plan_id = "executedPlanId";
      id = "executedPlanId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `executedPlanId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
