\set function_name api.insert_invoice_tasks

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  in "tasksIds" integer[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into invoice_tasks select "invoiceId", unnest("tasksIds");
      id = "invoiceId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `invoiceId`\n
* `tasksIds`\n
\n
Output `id`: the same as `invoiceId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
