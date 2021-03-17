\set function_name api.modify_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  in "name" text,
  in "description" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update teams as t set (
        name,
        description
      ) = (select new_values.*)
      from (select
        "name",
        "description"
      ) as new_values
      where t.team_id = "teamId";
      id = "teamId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'`teamId` of the modified team\n') as new_comment \gset

comment on function :function_name is :'new_comment';
