\set function_name api.remove_bundle_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "bundleId" integer,
  in "planId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from bundle_plans where bundle_id = "bundleId" and plan_id = "planId";
      id = "bundleId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `bundleId`\n
* `planId`\n
\n
Output `id`: the same as `bundleId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
