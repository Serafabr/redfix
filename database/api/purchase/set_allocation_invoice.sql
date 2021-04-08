\set function_name api.set_allocation_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "allocId" integer,
  in "invoiceId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update allocations set invoice_id = "invoiceId" where alloc_id = "allocId";
      id = "allocId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `allocId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
