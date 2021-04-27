\set function_name api.delete_file

drop function if exists :function_name;
create or replace function :function_name (
  in "uuid" uuid,
  out id integer
)
  language plpgsql
  as $$
    declare
      uuid_to_remove alias for "uuid";
    begin
      delete from files as f where f.uuid = uuid_to_remove;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
