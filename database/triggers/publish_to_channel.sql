drop trigger if exists publish_to_channel on assets;
drop function if exists publish_to_channel;

create or replace function publish_to_channel() returns trigger 
language plpgsql
volatile
as $$
declare
begin
  perform pg_notify('postgraphile:channelname', 'Assets updated at ' || now()::text);
  return null;
end;
$$;

create trigger publish_to_channel
after insert or update on assets
for each row execute procedure publish_to_channel();

insert into assets values (
  default,
  now()::text,
  'name',
  null,
  1
);