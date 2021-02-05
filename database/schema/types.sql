create type depot_event_enum as enum (
  'insert',
  'new_box',
  'category_change'
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
