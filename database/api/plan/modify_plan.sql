\set function_name api.modify_plan

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in "NAME" text,
  in "DESCRIPTION" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      update plans set
        name = "NAME",
        description = "DESCRIPTION"
      where plan_id = "planId";
      id = "planId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`planId` of the modified plan\n') as new_comment \gset

comment on function :function_name is :'new_comment';
