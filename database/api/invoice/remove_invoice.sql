\set function_name api.remove_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from invoices where invoice_id = "invoiceId";
      -- cascades to invoices_tasks table
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'Output `id`: `invoiceId` of the deleted invoice\n') as new_comment \gset

comment on function :function_name is :'new_comment';
