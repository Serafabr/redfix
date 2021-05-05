\set function_name api.set_my_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update persons set team_id = "teamId" where person_id = get_person_id();
      id = "teamId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `teamId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
