\set function_name api.remove_invoice_task

drop function if exists :function_name;
create or replace function :function_name (
  in "invoiceId" integer,
  in "taskId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from invoice_tasks where invoice_id = "invoiceId" and task_id = "taskId";
      id = "invoiceId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `invoiceId`\n
* `taskId`\n
\n
Output `id`: the same as `invoiceId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
