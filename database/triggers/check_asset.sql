drop trigger if exists check_asset on assets;
drop function if exists check_asset;

create or replace function check_asset ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- check if asset category is valid
      if (select parent_id from asset_relations where asset_id = new.category) is null then
        return new;
      else
        raise exception '%', get_exception_message(5);
      end if;
    end;
  $$
;

create trigger check_asset
before insert or update on assets
for each row execute procedure check_asset();
