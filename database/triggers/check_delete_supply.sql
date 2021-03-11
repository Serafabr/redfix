\set trigger_name check_delete_supply

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- check if the deleted supply is used by a task
      if (select exists (select task_id from task_supplies where supply_id = old.supply_id))
        then raise exception '%', get_exception_message(301);
        else return old;
      end if;
    end;
  $$
;

create trigger :trigger_name
before delete on supplies
for each row execute procedure :trigger_name();
