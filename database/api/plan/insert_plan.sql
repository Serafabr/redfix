\set function_name api.insert_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "description" text,
  in "periodicityId" integer default null,
  in "dateStart" date default null,
  in "isActive" boolean default true,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into plans values (
        default,
        now(),
        now(),
        get_person_id(),
        get_person_id(),
        "name",
        "description",
        "periodicityId",
        "dateStart",
        "isActive"
      ) returning plan_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `planId` of the new plan\n') as new_comment \gset

comment on function :function_name is :'new_comment';
