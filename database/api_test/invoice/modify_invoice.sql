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
    begin
      update invoices as i set (
        description,
        invoice_start,
        invoice_end,
        note
      ) = (select new_values.*)
      from (select
        "description",
        "invoiceStart",
        "invoiceEnd",
        "note"
      ) as new_values
      where i.invoice_id = "invoiceId";
      id = "invoiceId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `invoiceId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
