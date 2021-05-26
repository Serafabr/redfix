\set function_name api.modify_qty_approved

drop function if exists :function_name;
create or replace function :function_name (
  in "allocId" integer,
  in "qtyApproved" numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      update allocations set
        qty_approved = "qtyApproved",
        approved_at = now(),
        approved_by = get_person_id()
      where alloc_id = "allocId";
      id = "allocId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `allocId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
