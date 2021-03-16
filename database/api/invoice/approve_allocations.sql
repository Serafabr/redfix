\set function_name api.approve_allocations

drop type if exists allocation_approval cascade;
create type allocation_approval as (
  alloc_id integer,
  qty_approved numeric
);

drop function if exists :function_name;
create or replace function :function_name (
  in "allocationApprovals" allocation_approval[],
  out id integer
)
  language plpgsql
  as $$
    begin
      update allocations as a set (
        qty_approved
      ) = (
        select ua.qty_approved
      ) from (select unnest("allocationApprovals")) as ua
      where a.alloc_id = ua.alloc_id;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
