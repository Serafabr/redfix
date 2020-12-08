create type file_metadata as (
  filename text,
  uuid uuid,
  size bigint
);

create type task_event_enum as enum (
  'insert',
  'send',
  'receive',
  'cancel',
  'move',
  'note'
);
