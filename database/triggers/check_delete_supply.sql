drop trigger if exists check_delete_supply on supplies;
drop function if exists check_delete_supply;
create or replace function check_delete_supply ()
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

create trigger check_delete_supply
before delete on supplies
for each row execute procedure check_delete_supply();
