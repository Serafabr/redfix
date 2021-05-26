\set trigger_name validate_person_team

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- check if the person is in the team
      if (select new.person_id in (select person_id from team_persons where team_id = new.team_id))
        then
          -- check if the team is active
          if (select is_active from teams where team_id = new.team_id)
            then return new;
            else perform raise_exception(604);
          end if;
        else
          perform raise_exception(603);
      end if;
    end;
  $$
;

create trigger :trigger_name
before update of team_id on persons
for each row execute procedure :trigger_name();
