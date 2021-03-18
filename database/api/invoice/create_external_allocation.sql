\set function_name api.create_external_allocation

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "specId" integer,
  in "internalBoxId" integer,
  in "qtyProposed" numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      -- todo
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the new`allocId`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
