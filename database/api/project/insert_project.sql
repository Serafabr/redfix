\set function_name api.insert_project

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "isActive" boolean,
  in "description" text default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into projects values (
        default,
        "name",
        "description",
        "dateStart",
        "dateEnd",
        "isActive"
      ) returning project_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `projectId` of the new project\n') as new_comment \gset

comment on function :function_name is :'new_comment';
