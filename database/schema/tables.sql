create table teams (
  team_id integer primary key generated always as identity,
  name text not null,
  description text,
  is_active boolean not null default true
);

create table persons (
  person_id integer primary key generated always as identity,
  username text not null unique,
  cpf text not null unique check (cpf ~ '^\d{11}$'),
  email text not null unique check (email ~ '^.+@.+\..+$'),
  name text not null,
  phone text not null,
  cellphone text,
  password_hash text,
  person_role text not null references person_roles (person_role) default 'visitor',
  team_id integer references teams (team_id),
  avatar_uuid uuid
);

create table team_persons (
  team_id integer references teams (team_id),
  person_id integer references persons (person_id),
  primary key (team_id, person_id)
);

create table firms (
  firm_id integer primary key generated always as identity,
  name text not null,
  name_rs text,
  cnpj text not null check (cnpj ~ '^\d{14}$')
);

create table assets (
  asset_id integer primary key generated always as identity,
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
  asset_event_id integer primary key generated always as identity,
  asset_id integer not null references assets (asset_id),
  asset_event asset_event_enum not null,
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

create table monitors (
  monitor_id integer primary key generated always as identity,
  created_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  name text not null,
  description text not null,
  monitor_category_id integer not null references monitor_categories (monitor_category_id),
  unit text not null,
  asset_id integer not null references assets (asset_id),
  lower_limit numeric,
  upper_limit numeric,
  next_read_date timestamptz
);

create table monitor_reads (
  monitor_read_id integer primary key generated always as identity,
  monitor_id integer not null references monitors (monitor_id),
  read_at timestamptz not null,
  read_value numeric not null,
  note text
);

create table tags (
  tag_id integer primary key generated always as identity,
  tag_text text not null
);

create table asset_tags (
  asset_id integer not null references assets (asset_id),
  tag_id integer not null references tags (tag_id) on delete cascade
);

create table depots (
  depot_id integer primary key generated always as identity,
  depot_sf text not null,
  depot_category_id integer not null references depot_categories (depot_category_id),
  name text not null,
  description text not null,
  is_active boolean not null,
  parent_id integer references depots (depot_id),
  firm_id integer references firms (firm_id),
  material_default_bdi numeric not null default 0,
  service_default_bdi numeric not null default 0,
  date_sign date,
  date_pub date,
  date_start date,
  date_end date,
  url text,
  sigad text
);

create table depot_events (
  depot_event_id integer primary key generated always as identity,
  depot_id integer not null references depots (depot_id),
  depot_event depot_event_enum not null,
  created_at timestamptz not null default now(),
  person_id integer not null references persons (person_id) default get_person_id(),
  note text
);

create table supplies (
  supply_id integer primary key generated always as identity,
  supply_sf text not null,
  depot_id integer not null references depots (depot_id),
  name text not null,
  unit_id integer not null references units (unit_id),
  supply_category_id integer not null references supply_categories (supply_category_id),
  is_internal boolean not null
  -- box_id integer references boxes (box_id)
);

-- create table boxes (
--   box_id integer primary key generated always as identity,
--   box_sf text not null,
--   ? depot_id integer not null references depots (depot_id),
--   ? name text not null
-- );

create table supply_prices (
  supply_price_id integer primary key generated always as identity,
  supply_id integer not null references supplies (supply_id),
  bdi numeric not null,
  price numeric not null,
  valid_from date not null,
  valid_to date
);

create table plans (
  plan_id integer primary key generated always as identity,
  created_at timestamptz not null default now(),
  created_by integer not null references persons (person_id) default get_person_id(),
  name text not null,
  description text not null,
  depot_id integer not null references depots (depot_id)
);

create table task_templates (
  task_template_id integer primary key generated always as identity,
  title text not null,
  description text not null,
  task_category_id integer not null references task_categories (task_category_id),
  task_priority_id integer not null references task_priorities (task_priority_id),
  plan_id integer not null references plans (plan_id),
  periodicity_id integer not null references periodicities (periodicity_id),
  next_team_id integer not null references teams (team_id),
  todos todo_type[] not null default array[]::todo_type[]
);

create table task_template_assets (
  task_template_id integer not null references task_templates (task_template_id),
  asset_id integer not null references assets (asset_id),
  primary key (task_template_id, asset_id)
);

create table projects (
  project_id integer primary key generated always as identity,
  name text not null,
  description text,
  date_start timestamptz,
  date_end timestamptz,
  is_active boolean not null default true
);

create table requests (
  request_id integer primary key generated always as identity,
  title text,
  description text,
  email text,
  phone text,
  department text,
  place text
);

create table tasks (
  task_id integer primary key generated always as identity,
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
  request_id integer references requests (request_id),
  todos todo_type[] not null default array[]::todo_type[]
);

create table task_assets (
  task_id integer not null references tasks (task_id),
  asset_id integer not null references assets (asset_id),
  primary key (task_id, asset_id)
);

create table task_events (
  task_event_id integer primary key generated always as identity,
  task_id integer not null references tasks (task_id),
  task_event task_event_enum not null,
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

create table person_tasks (
  person_id integer not null references persons (person_id),
  task_id integer not null references tasks (task_id),
  primary key (person_id, task_id)
);

create table allocations (
  alloc_id integer primary key generated always as identity,
  created_at timestamptz not null default now(),
  created_by integer not null default get_person_id(),
  supply_id integer not null references supplies (supply_id),
  alloc_status_id integer not null references alloc_statuses (alloc_status_id),
  source_depot_id integer references depots (depot_id),
  target_depot_id integer references depots (depot_id),
  task_id integer references tasks (task_id),
  qty_allocated numeric,
  allocated_at timestamptz,
  allocated_by integer references persons (person_id),
  qty_proposed numeric,
  proposed_at timestamptz,
  proposed_by integer references persons (person_id),
  qty_approved numeric,
  approved_at timestamptz,
  approved_by integer references persons (person_id),
  note text,
  constraint check_source_is_not_also_target check (source_depot_id <> target_depot_id)
);

create table invoices (
  invoice_id integer primary key generated always as identity,
  invoice_sf text,
  depot_id integer not null references depots (depot_id),
  chave text not null unique,
  numero text not null,
  datahoraemissao text not null default '',
  emitcnpj text not null,
  emitnome text not null,
  destcnpj text not null,
  destnome text not null,
  vbc text not null,
  vicms text not null,
  vicmsdeson text,
  vbcst text not null,
  vst text not null,
  vprod text not null,
  vfrete text not null,
  vseg text not null,
  vdesc text not null,
  vii text not null,
  vipi text not null,
  vpis text not null,
  vcofins text not null,
  voutro text not null,
  vnf text not null
  -- _vbc numeric generated always as (vbc::numeric) stored,
  -- _vicms numeric generated always as (vicms::numeric) stored,
  -- _vicmsdeson numeric generated always as (vicmsdeson::numeric) stored,
  -- _vbcst numeric generated always as (vbcst::numeric) stored,
  -- _vst numeric generated always as (vst::numeric) stored,
  -- _vprod numeric generated always as (vprod::numeric) stored,
  -- _vfrete numeric generated always as (vfrete::numeric) stored,
  -- _vseg numeric generated always as (vseg::numeric) stored,
  -- _vdesc numeric generated always as (vdesc::numeric) stored,
  -- _vii numeric generated always as (vii::numeric) stored,
  -- _vipi numeric generated always as (vipi::numeric) stored,
  -- _vpis numeric generated always as (vpis::numeric) stored,
  -- _vcofins numeric generated always as (vcofins::numeric) stored,
  -- _voutro numeric generated always as (voutro::numeric) stored,
  -- _vnf numeric generated always as (vnf::numeric) stored
);

create table invoice_items (
  invoice_item_id integer primary key generated always as identity,
  invoice_id integer not null references invoices (invoice_id),
  -- numprod integer not null, --???
  codigoprod text not null,
  descprod text not null,
  ncm text not null,
  ean text,
  unidade text not null,
  quantidade text not null,
  valorunit text not null,
  valoritem text not null,
  valorbcicms text
  -- _quantidade numeric generated always as () stored,
  -- _valorunit numeric generated always as () stored,
  -- _valoritem numeric generated always as () stored,
  -- _valorbcicms numeric generated always as () stored
);

create table billings (
  billing_id integer primary key generated always as identity,
  depot_id integer not null references depots (depot_id),
  description text not null,
  paid boolean not null,
  date_start date not null,
  date_end date not null,
  date_payment date,
  amount_paid numeric,
  note text
);

create table refunds (
  refund_id integer primary key generated always as identity,
  billing_id integer not null references billings (billing_id),  
  alloc_id integer not null references allocations (alloc_id),
  invoice_item_id integer not null references invoice_items (invoice_item_id),
  conversion_factor numeric not null default 1,
  qty numeric not null,
  note text
);

create table costs (
  cost_id integer primary key generated always as identity,
  cost_sf text not null,
  depot_id integer not null references depots (depot_id),
  name text not null,
  default_multiplier numeric not null default 1
);

create table cost_prices (
  cost_price_id integer primary key generated always as identity,
  cost_id integer not null references costs (cost_id),
  price numeric not null,
  valid_from date not null,
  valid_to date
);

create table billing_costs (
  billing_cost_id integer primary key generated always as identity,
  billing_id integer not null references billings (billing_id),
  cost_price_id integer not null references cost_prices (cost_price_id),
  multiplier numeric not null
);

create table discounts (
  discount_id integer primary key generated always as identity,
  discount numeric not null,
  referenced_billing_id integer not null references billings (billing_id),
  discounted_billing_id integer not null references billings (billing_id),
  note text not null
);

create table market_prices (
  market_price_id integer primary key generated always as identity,
  supply_id integer not null references supplies (supply_id),
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
  closed_tasks integer,
  cancelled_tasks integer,
  total_assets integer,
  total_facilities integer,
  total_appliances integer,
  total_persons integer,
  total_supervisors integer,
  total_inspectors integer,
  total_employees integer,
  total_visitors integer,
  total_depots integer,
  total_active_depots integer
);

create table data_change_logs (
  person_id integer not null references persons (person_id) default get_person_id(),
  created_at timestamptz not null,
  operation text not null,
  tablename text not null,
  old_row jsonb,
  new_row jsonb
);
