\set trigger_name publish_to_channel

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger 
  language plpgsql
  volatile
  as $$
    begin
      perform pg_notify('postgraphile:channelname', 'Assets updated at ' || now()::text);
      return null;
    end;
  $$
;

-- example:
-- create trigger :trigger_name
-- after insert or update or delete on assets
-- for each row execute procedure :trigger_name();
