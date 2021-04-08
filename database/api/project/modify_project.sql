\set function_name api.modify_project

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  in "NAME" text,
  in "DESCRIPTION" text default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update projects set
        name = "NAME",
        description = "DESCRIPTION",
        date_start = "dateStart",
        date_end = "dateEnd"
      where project_id = "projectId";
      id = "projectId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`projectId` of the modified project\n') as new_comment \gset

comment on function :function_name is :'new_comment';
