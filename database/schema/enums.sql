create type asset_event_enum as enum (
  'creation',
  'status',
  'note'
);

create type depot_event_enum as enum (
  'creation',
  'category',
  'extension',
  'adjustment'
);

create type task_event_enum as enum (
  'creation',
  'team',
  'status',
  'note'
);
