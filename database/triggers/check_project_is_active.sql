\set trigger_name check_project_is_active

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- check if project is active
      if new.project_id is not null
        then if (select p.is_active from projects as p where p.project_id = new.project_id)
          then return new;
          else perform raise_exception(204);
        end if;
        else return new;
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert or update on tasks
for each row execute function :trigger_name();
