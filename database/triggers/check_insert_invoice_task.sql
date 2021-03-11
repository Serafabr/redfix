\set trigger_name check_insert_invoice_task

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      if (select t.task_status_id = 7 from tasks as t where t.task_id = new.task_id)
        then return new;
        else raise exception '%', get_exception_message(206);
      end if;
    end;
  $$
;

-- example:
-- create trigger :trigger_name
-- before insert or update on invoice_tasks
-- for each row execute procedure :trigger_name();
