\set function_name api.remove_person_from_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  in "personId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from team_persons where team_id = "teamId" and person_id = "personId";
      id = "teamId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'the same as `teamId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
