\set trigger_name validate_task_event

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    declare
      task_current_team integer;
      is_event_ok boolean;
    begin
      select team_id into task_current_team from tasks where task_id = new.task_id;
      select case new.task_event
        when 'creation' then (true)
        when 'modification' then (
          task_current_team = new.team_id or
          current_role = 'administrator' or
          current_role = 'supervisor' or
          current_role = 'inspector'
        )
        when 'team' then (
          new.next_team_id is not null and (
            task_current_team = new.team_id or
            current_role = 'administrator' or
            current_role = 'supervisor' or
            current_role = 'inspector'
          )
        )
        when 'status' then (
          new.task_status_id is not null and (
            task_current_team = new.team_id or
            current_role = 'administrator' or
            current_role = 'supervisor' or
            current_role = 'inspector'
          )
        )
        when 'note' then (
          new.note is not null
        )
      end into is_event_ok;
      if is_event_ok
        then return new;
        else perform raise_exception(202);
      end if;
    end;
  $$
;

create trigger :trigger_name
before insert on task_events
for each row execute procedure :trigger_name();
