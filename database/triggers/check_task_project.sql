drop trigger if exists check_task_project on tasks;
drop function if exists check_task_project;
create or replace function check_task_project ()
  returns trigger
  language plpgsql
  as $$
    begin
      -- check if project is active
      if new.project_id is not null
        then if (select p.is_active from projects as p where p.project_id = new.project_id)
          then return new;
          else raise exception '%', get_exception_message(202);
        end if;
        else return new;
      end if;
    end;
  $$
;

create trigger check_task_project
before insert or update on tasks
for each row execute procedure check_task_project();
