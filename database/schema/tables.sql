create table persons (
  person_id integer primary key generated by default as identity,
  username text not null unique,
  cpf text not null unique check (cpf ~ '^\d{11}$'),
  email text not null unique check (email ~* '^.+@.+\..+$'),
  -- team_id integer not null references teams (team_id),
  name text not null,
  phone text not null,
  cellphone text,
  password_hash text not null default '',
  is_active boolean not null default true,
  person_role text not null references person_roles (person_role) default 'visitor',
  avatar_uuid uuid
);

create table firms (
  firm_id integer primary key generated by default as identity,
  name text not null,
  name_rs text,
  cnpj text not null check (cnpj ~ '^\d{14}$')
);

create table assets (
  asset_id integer primary key generated by default as identity,
  asset_sf text not null unique,
  name text not null,
  asset_category_id integer not null references asset_categories (asset_category_id),
  location_id integer not null references assets (asset_id),
  place text,
  description text,
  latitude numeric,
  longitude numeric,
  area numeric,
  manufacturer text,
  serial_number text,
  model text,
  price numeric
);

create table asset_events (
  asset_event_id integer primary key generated by default as identity,
  asset_id integer not null references assets (asset_id),
  asset_event_name asset_event_enum not null,
  created_at timestamptz not null default now(),
  person_id integer not null references persons (person_id) default get_person_id(),
  asset_status_id integer references asset_statuses (asset_status_id),
  note text
);

create table asset_parents (
  parent_id integer not null references assets (asset_id),
  asset_id integer not null references assets (asset_id),
  primary key (parent_id, asset_id)
);

create table depots (
  depot_id integer primary key generated by default as identity,
  depot_sf text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  depot_category_id integer not null references depot_categories (depot_category_id),
  date_sign date,
  date_pub date,
  date_start date,
  date_end date,
  firm_id integer references firms (firm_id),
  title text not null,
  description text not null,
  url text,
  sigad text
);

create table depot_events (
  depot_event_id integer primary key generated by default as identity,
  depot_id integer not null references depots (depot_id),
  depot_event_name depot_event_enum not null,
  created_at timestamptz not null default now(),
  person_id integer not null references persons (person_id) default get_person_id(),
  note text
);

create table boxes (
  box_id integer primary key generated by default as identity,
  box_sf text not null,
  depot_id integer not null references depots (depot_id),
  is_internal boolean not null,
  material_default_bdi numeric not null default 0,
  service_default_bdi numeric not null default 0,
  unique (depot_id, box_sf)
);

create table active_boxes (
  box_id integer primary key references boxes (box_id)
);

create table teams (
  team_id integer primary key generated by default as identity,
  name text not null,
  description text,
  is_active boolean not null default true
);

create table team_persons (
  team_id integer references teams (team_id),
  person_id integer references persons (person_id),
  primary key (team_id, person_id)
);

create table projects (
  project_id integer primary key generated by default as identity,
  name text not null,
  description text,
  date_start timestamptz,
  date_end timestamptz,
  is_active boolean not null default true
);

create table requests (
  request_id integer primary key generated by default as identity,
  title text,
  description text,
  email text,
  phone text,
  department text,
  place text
);

create table plans (
  plan_id integer primary key generated by default as identity,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  name text not null,
  description text not null,
  depot_id integer not null references depots (depot_id)
);

create table task_templates (
  task_template_id integer primary key generated by default as identity,
  title text not null,
  description text not null,
  task_category_id integer not null references task_categories (task_category_id),
  task_priority_id integer not null references task_priorities (task_priority_id),
  plan_id integer not null references plans (plan_id),
  periodicity_id integer not null references periodicities (periodicity_id),
  next_team_id integer not null references teams (team_id)
);

create table tasks (
  task_id integer primary key generated by default as identity,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  task_priority_id integer not null references task_priorities (task_priority_id),
  task_category_id integer not null references task_categories (task_category_id),
  task_status_id integer not null references task_statuses (task_status_id) default 1,
  task_template_id integer references task_templates (task_template_id),
  team_id integer not null references teams (team_id),
  project_id integer references projects (project_id) on delete set null,
  title text not null,
  description text not null,
  place text,
  progress integer check (progress >= 0 and progress <= 100),
  date_limit timestamptz,
  date_start timestamptz,
  date_end timestamptz,
  request_id integer references requests (request_id)
);

create table task_assets (
  task_id integer not null references tasks (task_id),
  asset_id integer not null references assets (asset_id),
  primary key (task_id, asset_id)
);

create table task_events (
  task_event_id integer primary key generated by default as identity,
  task_id integer not null references tasks (task_id),
  task_event_name task_event_enum not null,
  created_at timestamptz not null default now(),
  person_id integer not null references persons (person_id) default get_person_id(),
  team_id integer not null references teams (team_id),
  next_team_id integer references teams (team_id),
  task_status_id integer references task_statuses (task_status_id),
  note text,
  reply_to integer references task_events (task_event_id),
  updated_at timestamptz,
  is_visible boolean default true
);

create table specs (
  spec_id integer primary key generated by default as identity,
  depot_id integer not null references depots (depot_id),
  spec_sf text not null,
  name text not null,
  unit integer not null references units (unit_id)
);

create table supplies (
  -- supply_id is a surrogate key, for convenience (spec_id, box_id are enough to uniquely identify)
  supply_id integer primary key generated by default as identity,
  spec_id integer not null references specs (spec_id),
  box_id integer not null references boxes (box_id),
  qty_initial numeric not null,
  price numeric not null,
  bdi numeric not null default 0,
  qty_proposed numeric not null default 0,
  qty_approved numeric not null default 0,
  qty_consumed numeric not null default 0
);

create table invoices (
  invoice_id integer primary key generated by default as identity,
  depot_id integer not null references depots (depot_id),
  description text not null,
  paid boolean not null,
  invoice_start date not null,
  invoice_end date not null,
  note text
);

create table allocations (
  alloc_id integer primary key generated by default as identity,
  task_id integer not null references tasks (task_id),
  spec_id integer not null references specs (spec_id) on delete cascade,
  internal_box_id integer references boxes (box_id),
  external_box_id integer references boxes (box_id),
  supply_id integer references supplies (supply_id),
  invoice_id integer references invoices (invoice_id),
  qty_proposed numeric not null,
  qty_approved numeric,
  qty_consumed numeric,
  price_source alloc_price_source,
  price numeric
);

create table tags (
  tag_id integer primary key generated by default as identity,
  tag_text text not null
);

create table asset_tags (
  asset_id integer not null references assets (asset_id),
  tag_id integer not null references tags (tag_id) on delete cascade
);

create table person_tasks (
  person_id integer not null references persons (person_id),
  task_id integer not null references tasks (task_id),
  primary key (person_id, task_id)
);

create table task_template_assets (
  task_template_id integer not null references task_templates (task_template_id),
  asset_id integer not null references assets (asset_id),
  primary key (task_template_id, asset_id)
);

create table monitors (
  monitor_id integer primary key generated by default as identity,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  name text not null,
  description text not null,
  monitor_category_id integer not null references monitor_categories (monitor_category_id),
  unit text not null,
  asset_id integer not null references assets (asset_id),
  lower_limit numeric,
  upper_limit numeric
);

create table monitor_reads (
  monitor_read_id integer primary key generated by default as identity,
  monitor_id integer not null references monitors (monitor_id),
  read_at timestamptz not null default now(),
  read_value numeric not null,
  note text
);

create table prices (
  price_id integer primary key generated by default as identity,
  spec_id integer not null references specs (spec_id),
  price numeric not null,
  date date not null,
  valid_days integer not null,
  price_source_type_id integer not null references price_source_types (price_source_type_id),
  firm_id integer references firms (firm_id),
  note text
);

create table dashboard (
  created_at timestamptz not null,
  total_tasks integer,
  delayed_tasks integer,
  finished_tasks integer,
  cancelled_tasks integer,
  total_assets integer,
  total_facilities integer,
  total_appliances integer
  -- total persons
  -- total active persons
  -- total depots
  -- total active depots (i.e., depots with active boxes)
  -- total supplies (i.e., supplies of active boxes)
  -- etc.
);

create table data_change_logs (
  person_id integer not null references persons (person_id) default get_person_id(),
  created_at timestamptz not null,
  operation text not null,
  tablename text not null,
  old_row jsonb,
  new_row jsonb
);
