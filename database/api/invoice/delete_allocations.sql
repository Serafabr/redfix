\set function_name api.delete_allocations

drop function if exists :function_name;
create or replace function :function_name (
  in "allocIds" integer[],
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from allocations where alloc_id in (select unnest("allocIds"));
      id = 1;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
