\set function_name api.modify_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in "name" text,
  in "description" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      update plans as p set (
        name,
        description
      ) = (select new_values.*)
      from (select
        "name",
        "description"
      ) as new_values
      where p.plan_id = "planId";
      id = "planId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`planId` of the modified plan\n') as new_comment \gset

comment on function :function_name is :'new_comment';
