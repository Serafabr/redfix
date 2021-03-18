\set function_name api.create_external_allocation

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "specId" integer,
  in "qtyProposed" numeric,
  in "externalBoxId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into allocations as a (
        task_id,
        spec_id,
        external_box_id,
        qty_proposed
      ) values (
        "taskId",
        "specId",
        "externalBoxId",
        "qtyProposed"
      ) returning a.alloc_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the new`allocId`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
