drop trigger if exists check_update_task_event on task_events;
drop function if exists check_update_task_event;
create or replace function check_update_task_event ()
  returns trigger
  language plpgsql
  as $$
    begin
      if old.person_id = get_person_id()
        then return new;
        else raise exception '%', get_exception_message(204);
      end if;
    end;
  $$
;
create trigger check_update_task_event
before update on task_events
for each row execute procedure check_update_task_event();
