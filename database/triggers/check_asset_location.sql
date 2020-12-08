drop trigger if exists check_asset_location on assets;
drop function if exists check_asset_location;

create or replace function check_asset_location ()
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

create trigger check_asset_location
before insert or update on assets
for each row execute procedure check_asset_location();
