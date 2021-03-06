\set trigger_name validate_asset_location

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- check most common case (new assets)
      if (select a.asset_category_id = 1 from assets as a where a.asset_id = new.location_id)
        then return new;
        -- check asset categories creation
        else if (new.asset_id in (select asset_category_id from asset_categories))
          then return new;
          -- raise exception if location is not a facility
          else perform raise_exception(101);
        end if;
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert or update on assets
for each row execute function :trigger_name();
