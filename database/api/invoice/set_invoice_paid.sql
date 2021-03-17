\set function_name api.set_invoice_paid

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update invoices set paid = true where invoice_id = "invoiceId";
      id = "invoiceId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `invoiceId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
