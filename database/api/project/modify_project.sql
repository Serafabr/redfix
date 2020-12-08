\set function_name api.modify_project

drop function if exists :function_name;
create or replace function :function_name (
  in attributes projects,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update projects set (
        name,
        description,
        date_start,
        date_end
      ) = (
        attributes.name,
        attributes.description,
        attributes.date_start,
        attributes.date_end
      ) where project_id = attributes.project_id
      returning project_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.projectId`\n
* `attributes.name`\n
\n
Output `id`: `projectId` of the modified project
';

grant execute on function :function_name to coordinator, supervisor, inspector;
