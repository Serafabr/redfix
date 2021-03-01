\set trigger_name insert_audit_trail

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      insert into audit_trails values (
        default,
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
