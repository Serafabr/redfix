\set trigger_name validate_asset_location

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      if (
        select a.asset_category_id = 1
        from assets as a
        where a.asset_id = new.location_id
      ) then return new;
        else raise exception '%', get_exception_message(101);
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert or update on assets
for each row execute procedure :trigger_name();
