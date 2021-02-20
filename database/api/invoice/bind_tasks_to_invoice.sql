\set function_name api.bind_tasks_to_invoice

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  in "depotId" integer,
  in "invoiceStart" date,
  in "invoiceEnd" date,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into invoice_tasks select distinct
        "depotId",
        t.task_id
      from tasks as t
      inner join task_supplies as ts using (task_id)
      inner join supplies as s using (supply_id)
      inner join boxes as b using (box_id)
      where
        t.task_status_id = 7 and -- verified tasks
        t.date_end >= "invoiceStart" and
        t.date_end <= "invoiceEnd" and
        b.depot_id = "depotId"
      ;
      id = "invoiceId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `invoiceId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
