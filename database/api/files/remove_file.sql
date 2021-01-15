\set function_name api.remove_file

drop function if exists :function_name;
create or replace function :function_name (
  in "uuid" uuid,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      uuid_to_remove alias for "uuid";
    begin
      delete from files as f where f.uuid = uuid_to_remove;
      id = 1;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `uuid`\n
\n
Output `id`: 1
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
