\set function_name api.modify_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  in "depotId" integer,
  in "description" text,
  in "dateStart" date,
  in "dateEnd" date,
  in "note" text,
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
        date_start,
        date_end,
        note
      ) = (
        new_description,
        "dateStart",
        "dateEnd",
        new_note
      );
      id = "invoiceId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `invoiceId`\n
* `depotId`\n
* `description`\n
\n
Output `id`: `invoiceId` of the new invoice
';

grant execute on function :function_name to coordinator, supervisor, inspector;
