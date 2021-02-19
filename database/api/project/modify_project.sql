\set function_name api.modify_project

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  in "name" text,
  -- in "isActive" boolean,
  in "description" text default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update projects set (
        name,
        description,
        date_start,
        date_end
      ) = (
        "name",
        "description",
        "dateStart",
        "dateEnd"
      ) where project_id = "projectId";
      id = "projectId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `projectId` of the modified project\n') as new_comment \gset

comment on function :function_name is :'new_comment';
