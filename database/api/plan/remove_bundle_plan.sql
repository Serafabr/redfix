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

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `bundleId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
