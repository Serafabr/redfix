\set function_name api.create_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "description" text,
  in "invoiceStart" date default null,
  in "invoiceEnd" date default null,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into invoices values (
        default,
        "depotId",
        "description",
        false,
        "invoiceStart",
        "invoiceEnd",
        "note"
      ) returning invoice_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`invoiceId` of the new invoice\n') as new_comment \gset

comment on function :function_name is :'new_comment';
