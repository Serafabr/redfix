\set function_name api.insert_project

drop function if exists :function_name;
create or replace function :function_name (
  in attributes projects,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into projects values (
        default,
        attributes.name,
        attributes.description,
        attributes.date_start,
        attributes.date_end,
        true
      ) returning project_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.name`\n
\n
Output `id`: `projectId` of the new project
';

grant execute on function :function_name to coordinator, supervisor, inspector;
