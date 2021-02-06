create table persons (
  person_id integer primary key generated by default as identity,
  username text not null unique,
  cpf text not null unique check (cpf ~ '^\d{11}$'),
  email text not null unique check (email ~* '^.+@.+\..+$'),
  name text not null,
  phone text not null,
  cellphone text,
  password_hash text not null default '',
  is_active boolean not null default true,
  person_role text not null references person_roles (person_role) default 'visitor'
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
  description text,
  asset_category_id integer not null references asset_categories (asset_category_id),
  location_id integer not null references assets (asset_id),
  latitude numeric,
  longitude numeric,
  area numeric,
  manufacturer text,
  serial_number text,
  model text,
  price numeric
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
  unique (depot_id, box_sf)
);

create table active_boxes (
  box_id integer primary key references boxes (box_id)
);

create table teams (
  team_id integer primary key generated by default as identity,
  name text not null unique,
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
  name text not null unique,
  description text,
  date_start timestamptz,
  date_end timestamptz,
  is_active boolean not null default true
);

create table requests (
  request_id integer primary key generated by default as identity,
  description text,
  title text,
  email text,
  phone text,
  department text,
  place text
);

create table tasks (
  task_id integer primary key generated by default as identity,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  task_priority_id integer not null references task_priorities (task_priority_id),
  task_category_id integer not null references task_categories (task_category_id),
  project_id integer references projects (project_id) on delete set null,
  title text not null,
  description text not null,
  place text,
  progress integer check (progress >= 0 and progress <= 100),
  date_limit timestamptz,
  date_start timestamptz,
  date_end timestamptz,
  request_id integer references requests (request_id),
  -- last event fields:
  team_id integer not null references teams (team_id),
  next_team_id integer references teams (team_id),
  task_status_id integer not null references task_statuses (task_status_id) default :'task_initial_status'::integer
);

create table task_assets (
  task_id integer not null references tasks (task_id),
  asset_id integer not null references assets (asset_id),
  primary key (task_id, asset_id)
);

create table task_events (
  task_event_id integer primary key generated by default as identity,
  task_id integer not null references tasks (task_id),
  event_name text check (event_name in ('insert','modify','send','receive','cancel','move','note')),
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
  spec_sf text not null check (spec_sf ~ '^SF-\d\d\d\d\d$'),
  version text not null,
  name text not null,
  spec_category_id integer not null references spec_categories (spec_category_id),
  spec_subcategory_id integer not null references spec_subcategories (spec_subcategory_id),
  unit text not null,
  spec_composition_id integer not null references spec_compositions (spec_composition_id),
  description text,
  materials text,
  services text,
  activities text,
  qualification text,
  notes text,
  criteria text,
  spreadsheets text,
  lifespan text,
  commercial_refs text,
  external_refs text,
  old_refs text,
  is_subcontractable text,
  catmat text,
  catser text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  unique (spec_sf, version)
);

create table supplies (
  supply_id integer primary key generated by default as identity,
  supply_sf text not null,
  box_id integer not null references boxes (box_id),
  spec_id integer not null references specs (spec_id),
  qty_initial numeric not null,
  price numeric not null
);

create table task_supplies (
  task_id integer references tasks (task_id) check (task_id is not null),
  supply_id integer not null references supplies (supply_id) on delete cascade,
  qty numeric not null,
  unique (task_id, supply_id)
);

create table audit_trails (
  person_id integer not null references persons (person_id) default get_person_id(),
  created_at timestamptz not null,
  operation text not null,
  tablename text not null,
  old_row jsonb,
  new_row jsonb
);

create table tags (
  tag_id integer primary key generated by default as identity,
  tag_text text not null
);

create table asset_tags (
  asset_id integer not null references assets (asset_id),
  tag_id integer not null references tags (tag_id) on delete cascade
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

create table plans (
  plan_id integer primary key generated by default as identity,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  name text not null,
  description text not null,
  periodicity_id integer references periodicities (periodicity_id),
  date_start date,
  is_active boolean default true
);

create table executed_plans (
  executed_plan_id integer primary key generated by default as identity,
  plan_id integer not null references plans (plan_id),
  started_at timestamptz not null,
  finished_at timestamptz,
  note text
);

create table bundles (
  bundle_id integer primary key generated by default as identity,
  name text not null,
  description text not null
);

create table bundle_assets (
  bundle_id integer references bundles (bundle_id),
  asset_id integer references assets (asset_id),
  primary key (bundle_id, asset_id)
);

create table bundle_plans (
  bundle_id integer references bundles (bundle_id),
  plan_id integer references plans (plan_id),
  primary key (bundle_id, plan_id)
);

create table prices (
  price_id integer primary key generated by default as identity,
  spec_id integer not null references specs (spec_id),
  date date not null,
  price numeric not null,
  price_source_type_id integer not null references price_source_types (price_source_type_id),
  source text not null,
  firm_id integer references firms (firm_id),
  is_active boolean default true
);

create table monitors (
  monitor_id integer primary key generated by default as identity,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  updated_by integer not null references persons (person_id) default get_person_id(),
  name text not null,
  description text not null,
  unit text not null,
  asset_id integer not null references assets (asset_id)
);

create table monitor_reads (
  monitor_read_id integer primary key generated by default as identity,
  monitor_id integer not null references monitors (monitor_id),
  read_at timestamptz not null default now(),
  read_value numeric not null,
  note text
);

create table person_tasks (
  person_id integer not null references persons (person_id),
  task_id integer not null references tasks (task_id),
  primary key (person_id, task_id)
);
