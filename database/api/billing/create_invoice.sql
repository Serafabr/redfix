\set function_name api.create_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "invoice" invoice_type,
  in "invoiceItems" invoice_item_type[],
  in "invoiceSf" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into invoices values (default, "invoiceSf", "depotId", "invoice".*) returning invoice_id into id;
      insert into invoice_items (
        invoice_id,
        codigoprod,
        descprod,
        ncm,
        ean,
        unidade,
        quantidade,
        valorunit,
        valoritem,
        valorbcicms
      ) select
        id,
        (unnest("invoiceItems")).*
      ;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`invoiceId` of the new invoice\n') as new_comment \gset

comment on function :function_name is :'new_comment';
