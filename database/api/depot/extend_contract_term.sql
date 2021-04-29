\set function_name api.modify_depot

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "dateEnd" date,
  -- supplies ids and their initial quantities
  out id integer
)
  language plpgsql
  as $$
    declare
      new_date_end alias for "dateEnd";
      old_date_end date;
    begin
      select date_end into old_date_end from depots where depot_id = "depotId";

      update depots set date_end = new_date_end where depot_id = "depotId";
      -- move remaining supplies to "waste bin"
      insert into allocations (
        created_at,
        created_by,
        supply_id,
        alloc_status_id,
        source_depot_id,
        target_depot_id,
        task_id,
        qty_allocated,
        allocated_at,
        allocated_by
      ) select
        now(),
        get_person_id(),
        -- supply id from a query (where depot_id = "depotId" and is_internal) OR from the mutation inputs
        1,
        "depotId",
        null,
        null,
        -- current balance
        ((new_date_end - 1)::text || 'T23:59:59')::timestamptz,
        get_person_id()
      ;
      -- re-add supplies 
      insert into allocations (
        created_at,
        created_by,
        supply_id,
        alloc_status_id,
        source_depot_id,
        target_depot_id,
        task_id,
        qty_allocated,
        allocated_at,
        allocated_by
      ) select
        now(),
        get_person_id(),
        -- supply id from a query (where depot_id = "depotId" and is_internal) OR from the mutation inputs
        1,
        null,
        "depotId",
        null,
        -- the same as last added qty (or qty from the mutation inputs)
        new_date_end,
        get_person_id()
      ;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `depotId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
