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
                t.team_id
          from tasks as t
        where t.task_id = new.task_id
      )
      select  case new.task_event
                when 'creation' then (true)
                when 'modification' then (true)
                when 'team' then (
                  new.next_team_id is not null and
                  (
                    ls.team_id = new.team_id or
                    current_role = 'administrator' or
                    current_role = 'supervisor'
                  )
                )
                when 'status' then (
                  -- todo: check team_id of the person setting task status is equal the
                  -- current team_id of the task; or check role is administrator or supervisor
                  true
                )
                when 'note' then new.note is not null
              end into is_event_ok
        from last_send as ls
      ;

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
