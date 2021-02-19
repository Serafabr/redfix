\set function_name api.remove_invoice_task

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  in "taskId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from invoice_tasks where invoice_id = "invoiceId" and task_id = "taskId";
      id = "invoiceId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `invoiceId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
