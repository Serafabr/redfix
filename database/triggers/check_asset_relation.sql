drop trigger if exists check_asset_relation on asset_relations;
drop function if exists check_asset_relation;

create or replace function check_asset_relation ()
  returns trigger
  language plpgsql
  as $$
    begin

      if new.parent_id is not null then
        if (select bool_and(parent_id is null) from asset_relations where asset_id = new.top_id) then
          return new;
        else
          raise exception '%', get_exception_message(6);
        end if;
      else
        raise exception '%', get_exception_message(7);
      end if;

    end;
  $$
;

create trigger check_asset_relation
before insert or update on asset_relations
for each row execute procedure check_asset_relation();
