\set function_name api.toggle_purchase_paid

drop function if exists :function_name;
create or replace function :function_name (
  in "purchaseId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update purchases set paid = not paid where purchase_id = "purchaseId";
      id = "purchaseId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `purchaseId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
