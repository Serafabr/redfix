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

comment on function :function_name is E'
Mandatory input(s):\n
* `depotId`\n
\n
Output `id`: `invoiceId` of the deleted invoice
';

grant execute on function :function_name to coordinator, supervisor;
