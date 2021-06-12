\set trigger_name validate_asset_parent

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      if (select new.asset_id not in (select asset_category_id from asset_categories))
        then
          if (new.parent_id <> new.asset_id)
            then return new;
            else perform raise_exception(104);
          end if;
        else perform raise_exception(102);
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert or update on asset_parents
for each row execute function :trigger_name();
