\set function_name api.approve_task_allocations

drop function if exists :function_name;
create or replace function :function_name (
  in "allocationsQuantities" allocation_quantity[],
  out id integer
)
  language plpgsql
  as $$
    begin
      with aa as (
        select (unnest("allocationsQuantities")).*
      ) update allocations as a set
        alloc_status_id = 3,
        qty_approved = aa.qty,
        approved_at = now(),
        approved_by = get_person_id()
      from aa
      where a.alloc_id = aa.alloc_id;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
