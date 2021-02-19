\set function_name api.modify_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in "name" text,
  in "isActive" boolean,
  in "description" text,
  in "periodicityId" integer default null,
  in "dateStart" date default null,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update plans set (
        name,
        description,
        periodicity_id,
        date_start,
        is_active
      ) = (
        "name",
        "description",
        "periodicityId",
        "dateStart",
        "isActive"
      ) where plan_id = "planId";
      id = "planId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `planId` of the modified plan\n') as new_comment \gset

comment on function :function_name is :'new_comment';
