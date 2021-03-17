\set function_name api.add_allocations_to_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "allocations" integer[],
  in "invoiceId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update allocations as a set invoice_id = "invoiceId" where a.alloc_id in (select unnest("allocations"));
      id = "invoiceId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `invoiceId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
