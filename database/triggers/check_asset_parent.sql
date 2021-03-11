\set trigger_name check_asset_parent

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      if (select new.asset_id not in (select asset_category_id from asset_categories))
        then return new;
        else raise exception '%', get_exception_message(102);
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert or update on asset_parents
for each row execute procedure :trigger_name();
