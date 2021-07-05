\set function_name api.delete_task_allocations

drop function if exists :function_name;
create or replace function :function_name (
  in "allocIds" integer[],
  out id integer
)
  language plpgsql
  as $$
    begin
      if (
        -- check if task allocation was not consumed
        0 not in (
          select alloc_status_id
          from allocations
          where alloc_id in (select unnest("allocIds"))
        )
      ) then delete from allocations where alloc_id in (select unnest("allocIds"));
        else perform raise_exception(502);
      end if;
      get diagnostics id = row_count;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the number of processed items\n') as new_comment \gset

comment on function :function_name is :'new_comment';
