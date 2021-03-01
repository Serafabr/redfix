\set trigger_name check_task_supply

drop trigger if exists :trigger_name on task_supplies;
drop function if exists :trigger_name;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- check if supply belongs to an active box
      if (
        select s.box_id in (select ab.box_id from active_boxes as ab)
        from supplies as s
        where s.supply_id = new.supply_id
      ) then return new;
        else raise exception '%', get_exception_message(202);
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert or update on task_supplies
for each row execute procedure :trigger_name();
