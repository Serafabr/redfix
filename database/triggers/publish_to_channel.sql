\set trigger_name publish_to_channel

drop trigger if exists :trigger_name on assets;
drop function if exists :trigger_name;
create or replace function :trigger_name() returns trigger 
language plpgsql
volatile
as $$
declare
begin
  perform pg_notify('postgraphile:channelname', 'Assets updated at ' || now()::text);
  return null;
end;
$$;

create trigger :trigger_name
after insert or update on assets
for each row execute procedure :trigger_name();
