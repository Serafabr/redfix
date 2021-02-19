\set function_name api.insert_team

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "description" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into teams values (
        default,
        "name",
        "description",
        true
      ) returning team_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'Output `id`: `teamId` of the new team\n') as new_comment \gset

comment on function :function_name is :'new_comment';
