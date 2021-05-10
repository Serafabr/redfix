\set function_name api.extend_contract_term

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
      "personId" constant integer = get_person_id();
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
        "personId",
        -- supply id from a query (where depot_id = "depotId" and is_internal) OR from the mutation inputs
        1,
        "depotId",
        null,
        null,
        -- current balance
        ((new_date_end - 1)::text || 'T23:59:59')::timestamptz,
        "personId"
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
        "personId",
        -- supply id from a query (where depot_id = "depotId" and is_internal) OR from the mutation inputs
        1,
        null,
        "depotId",
        null,
        -- the same as last added qty (or qty from the mutation inputs)
        new_date_end,
        "personId"
      ;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
