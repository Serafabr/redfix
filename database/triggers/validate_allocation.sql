\set trigger_name validate_allocation

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      if (coalesce(new.internal_box_id, new.external_box_id) is not null)
        then return new;
        else perform raise_exception(401);
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert or update on allocations
for each row execute procedure :trigger_name();
