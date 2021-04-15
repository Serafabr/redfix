create type asset_event_enum as enum (
  'status',
  'note'
);

create type depot_event_enum as enum (
  'create_depot',
  'create_box',
  'modify_depot',
  'modify_box',
  'change_category'
);

create type spec_type_enum as enum (
  'material',
  'service'
);

create type task_event_enum as enum (
  'insert',
  'modify',
  'send',
  'status',
  'note'
);

create type alloc_approval as (
  alloc_id integer,
  qty_approved numeric
);

create type alloc_price_source as enum (
  'box',
  'invoice',
  'search'
);

create type alloc_price as (
  alloc_id integer,
  price_source alloc_price_source,
  price numeric
);
