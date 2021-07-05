\set function_name api.approve_task_allocations

drop function if exists :function_name;
create or replace function :function_name (
  in "allocations" alloc_type[],
  out id integer
)
  language plpgsql
  as $$
    begin
      with aa as (
        select (unnest("allocations")).*
      ) update allocations as a set
        alloc_status_id = 3,
        qty_approved = aa.qty,
        approved_at = now(),
        approved_by = get_person_id()
      from aa
      where a.alloc_id = aa.alloc_id;
      get diagnostics id = row_count;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the number of processed items\n') as new_comment \gset

comment on function :function_name is :'new_comment';
