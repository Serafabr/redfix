\set function_name api.create_task_allocation

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "supplyId" integer,
  in "sourceDepotId" integer,
  in "qtyProposed" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into allocations (
        created_at,
        created_by,
        supply_id,
        alloc_status_id,
        source_depot_id,
        target_depot_id,
        task_id,
        qty_proposed,
        proposed_at,
        proposed_by
      ) values (
        now(),
        get_person_id(),
        "supplyId",
        2,
        "sourceDepotId",
        null,
        "taskId",
        "qtyProposed",
        now(),
        get_person_id()
      ) returning alloc_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`allocId` of the new allocation\n') as new_comment \gset

comment on function :function_name is :'new_comment';
