\set function_name api.add_allocations_to_purchase

drop function if exists :function_name;
create or replace function :function_name (
  in "allocations" integer[],
  in "purchaseId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update allocations as a set purchase_id = "purchaseId" where a.alloc_id in (select unnest("allocations"));
      id = "purchaseId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `purchaseId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
