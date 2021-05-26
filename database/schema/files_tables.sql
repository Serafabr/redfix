create table files (
  uuid uuid primary key,
  filename text not null,
  size bigint not null,
  uploaded_at timestamptz not null default now(),
  person_id integer not null references persons (person_id) default get_person_id()
);

create table asset_files (
  asset_id integer not null references assets (asset_id) on delete cascade,
  uuid uuid not null references files (uuid) on delete cascade
);

create table billing_files (
  billing_id integer not null references billings (billing_id) on delete cascade,
  uuid uuid not null references files (uuid) on delete cascade
);

create table depot_files (
  depot_id integer not null references depots (depot_id) on delete cascade,
  uuid uuid not null references files (uuid) on delete cascade
);

-- create table person_files (
--   person_id integer not null references persons (person_id),
--   uuid uuid not null references files (uuid) on delete cascade
-- );
alter table persons add foreign key (avatar_uuid) references files (uuid) on delete set null;

create table plan_files (
  plan_id integer not null references plans (plan_id) on delete cascade,
  uuid uuid not null references files (uuid) on delete cascade
);

create table project_files (
  project_id integer not null references projects (project_id) on delete cascade,
  uuid uuid not null references files (uuid) on delete cascade
);

create table task_files (
  task_id integer not null references tasks (task_id) on delete cascade,
  uuid uuid not null references files (uuid) on delete cascade
);
