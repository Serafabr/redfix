\set trigger_name verify_task_note_creator

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
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

create trigger :trigger_name
before update of note on task_events
for each row execute procedure :trigger_name();
