drop function if exists insert_audit_trail cascade;

create or replace function insert_audit_trail ()
  returns trigger
  language plpgsql
  security definer
  as $$
    begin
      insert into private.audit_trails values (
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

create trigger insert_audit_trail
after insert or update or delete on assets
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on asset_relations
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on contracts
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on persons
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on private.accounts
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on teams
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on team_persons
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on contract_teams
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on projects
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on tasks
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on task_messages
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on task_assets
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on specs
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on supplies
for each row execute procedure insert_audit_trail();

create trigger insert_audit_trail
after insert or update or delete on task_files
for each row execute procedure insert_audit_trail();
