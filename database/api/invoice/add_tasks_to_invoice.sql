\set function_name api.add_tasks_to_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  in "tasksIds" integer[],
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into invoice_tasks select "invoiceId", unnest("tasksIds");
      id = "invoiceId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `invoiceId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
