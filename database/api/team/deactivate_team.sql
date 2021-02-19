\set function_name api.deactivate_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update teams set is_active = false where team_id = "teamId";
      id = "teamId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `teamId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
