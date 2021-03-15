\set trigger_name validate_task_event

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    declare
      is_event_ok boolean;
    begin

      with last_send as (
        select  t.task_id,
                t.team_id,
                t.next_team_id
          from tasks as t
        where t.task_id = new.task_id
      )
      select  case new.task_event_name
                when 'insert' then (true)
                when 'modify' then (true)
                when 'send' then (
                  new.next_team_id is not null and
                  (
                    ls.team_id = new.team_id or
                    current_role = 'administrator' or
                    current_role = 'supervisor'
                  )
                )
                when 'receive' then (
                  (new.team_id = ls.next_team_id) and
                  (new.task_status_id is not null)
                )
                when 'cancel' then new.team_id = ls.team_id
                when 'move' then new.task_status_id is not null
                when 'note' then new.note is not null
              end into is_event_ok
        from last_send as ls
      ;

      if is_event_ok
        then return new;
        else raise exception '%', get_exception_message(203);
      end if;

    end;
  $$
;

create trigger :trigger_name
before insert on task_events
for each row execute procedure :trigger_name();
