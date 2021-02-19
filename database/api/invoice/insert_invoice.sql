\set function_name api.insert_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "description" text,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "note" text default null,
  out id integer
)
  language plpgsql
  strict
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

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `invoiceId` of the new invoice\n') as new_comment \gset

comment on function :function_name is :'new_comment';
