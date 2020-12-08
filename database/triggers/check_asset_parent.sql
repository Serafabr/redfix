drop trigger if exists check_asset_parent on asset_parents;
drop function if exists check_asset_parent;

create or replace function check_asset_parent ()
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

create trigger check_asset_parent
before insert or update on asset_parents
for each row execute procedure check_asset_parent();
