create type asset_event_enum as enum (
  'status',
  'note'
);

create type depot_event_enum as enum (
  'insert_depot',
  'insert_box',
  'modify_depot',
  'modify_box',
  'change_category'
);

create type task_event_enum as enum (
  'insert',
  'modify',
  'send',
  'receive',
  'cancel',
  'move',
  'note'
);
