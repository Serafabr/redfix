\set function_name api.add_person_to_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  in "personId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into team_persons values ("teamId", "personId");
      id = "teamId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'the same as `teamId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
