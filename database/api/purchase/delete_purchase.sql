\set function_name api.delete_purchase

drop function if exists :function_name;
create or replace function :function_name (
  in "purchaseId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from purchases where purchase_id = "purchaseId";
      -- cascades to invoices_tasks table
      id = "purchaseId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'the same as `purchaseId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
