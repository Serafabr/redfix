\set trigger_name log_data_change

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      insert into data_change_logs values (
        get_person_id(),
        now(),
        tg_op::text,
        tg_table_name::text,
        to_jsonb(old),
        to_jsonb(new)
      );
      return null; -- result is ignored since this is an after trigger
    end;
  $$
;

-- example:
-- create trigger log_data_change
-- after insert or update or delete on assets
-- for each row execute procedure log_data_change();
