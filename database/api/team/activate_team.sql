\set function_name api.activate_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update teams set is_active = true where team_id = "teamId";
      id = "teamId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'the same as `teamId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
