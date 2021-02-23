\set function_name api.modify_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in "name" text,
  in "description" text,
  in "periodicityId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update plans set (
        name,
        description,
        periodicity_id
      ) = (
        "name",
        "description",
        "periodicityId"
      ) where plan_id = "planId";
      id = "planId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`planId` of the modified plan\n') as new_comment \gset

comment on function :function_name is :'new_comment';
