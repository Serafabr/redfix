\set function_name api.set_my_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      -- check if the person is in the team
      if (select get_person_id() in (select person_id from team_persons where team_id = "teamId"))
        then update persons set team_id = "teamId" where person_id = get_person_id();
        else perform raise_exception(601);
      end if;
      id = "teamId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `teamId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
