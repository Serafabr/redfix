\set function_name api.insert_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "description" text,
  in "dateStart" date,
  in "dateEnd" date,
  in "note" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into invoices values (
        default,
        "depotId",
        "description",
        "dateStart",
        "dateEnd",
        "note"
      ) returning invoice into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `depotId`\n
* `description`\n
\n
Output `id`: `invoiceId` of the new invoice
';

grant execute on function :function_name to coordinator, supervisor, inspector;
