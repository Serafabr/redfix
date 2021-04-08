\set function_name api.create_allocation

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "specId" integer,
  in "qtyProposed" numeric,
  in "boxId" integer default null,
  in "invoiceId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into allocations as a (
        task_id,
        spec_id,
        box_id,
        invoice_id,
        qty_proposed,
        box_supply_id,
        invoice_supply_id
      ) values (
        "taskId",
        "specId",
        "boxId",
        "invoiceId",
        "qtyProposed",
        (select supply_id from supplies where box_id = "boxId" and spec_id = "specId"),
        (select supply_id from supplies where box_id = "invoiceId" and spec_id = "specId")
      ) returning a.alloc_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the new`allocId`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
