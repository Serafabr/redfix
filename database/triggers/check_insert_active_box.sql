drop trigger if exists check_insert_active_box on active_boxes;
drop function if exists check_insert_active_box;
create or replace function check_insert_active_box ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- before it is a formal depot (contract or arp), its boxes cannot be activated
      if (
        select dc.is_activatable
        from boxes as b
        inner join depots as d using (depot_id)
        inner join depot_categories dc using (depot_category_id)
        where b.box_id = new.box_id
      ) then return new;
        else raise exception '%', get_exception_message(302);
      end if;
    end;
  $$
;

create trigger check_insert_active_box
before insert on active_boxes
for each row execute procedure check_insert_active_box();
