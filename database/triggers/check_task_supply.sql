drop trigger if exists check_task_supply on task_supplies;
drop function if exists check_task_supply;

create or replace function check_task_supply ()
  returns trigger
  language plpgsql
  as $$
    declare
      qty_ok boolean;
      decimals_ok boolean;
      box_ok boolean;
    begin

      select ((b.qty_available + coalesce(old.qty, 0) - new.qty) >= 0),
            (z.allow_decimals or scale(new.qty) = 0),
            (d.box_id = s.box_id)
            into
            qty_ok,
            decimals_ok,
            box_ok
        from supplies as s
        inner join specs as z using (spec_id)
        inner join balances as b using (supply_id)
        inner join depots as d using (box_id)
      where s.supply_id = new.supply_id;

      if qty_ok and decimals_ok and box_ok then
        return new;
      elsif not qty_ok then
        raise exception '%', get_exception_message(2);
      elsif not decimals_ok then
        raise exception '%', get_exception_message(3);
      else
        raise exception '%', get_exception_message(4);
      end if;

    end;
  $$
;

create trigger check_task_supply
before insert or update on task_supplies
for each row execute procedure check_task_supply();
