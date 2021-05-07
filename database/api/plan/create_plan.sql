\set function_name api.create_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "description" text,
  in "depotId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      "personId" integer = get_person_id();
    begin
      insert into plans values (
        default,
        now(),
        "personId",
        "name",
        "description",
        "depotId"
      ) returning plan_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`planId` of the new plan\n') as new_comment \gset

comment on function :function_name is :'new_comment';
