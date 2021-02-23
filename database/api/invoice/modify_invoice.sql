\set function_name api.modify_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  in "depotId" integer,
  in "description" text,
  in "invoiceStart" date default null,
  in "invoiceEnd" date default null,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    declare
      new_description alias for "description";
      new_note alias for "note";
    begin
      update invoices set (
        description,
        invoice_start,
        invoice_end,
        note
      ) = (
        new_description,
        "invoiceStart",
        "invoiceEnd",
        new_note
      );
      id = "invoiceId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `invoiceId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
