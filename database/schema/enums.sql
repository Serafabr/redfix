create type asset_event_enum as enum (
  'creation',
  'modification',
  'status',
  'note'
);

create type depot_event_enum as enum (
  'creation',
  'modification',
  'category',
  'extension',
  'adjustment'
);

create type task_event_enum as enum (
  'creation',
  'modification',
  'team',
  'status',
  'note'
);
