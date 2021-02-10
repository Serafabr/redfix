create table files (
  uuid uuid primary key,
  filename text not null,
  size bigint not null,
  uploaded_at timestamptz not null default now(),
  person_id integer not null references persons (person_id) default get_person_id()
);

create table asset_files (
  asset_id integer not null references assets (asset_id),
  uuid uuid not null references files (uuid) on delete cascade
);

create table depot_files (
  depot_id integer not null references depots (depot_id),
  uuid uuid not null references files (uuid) on delete cascade
);

-- create table person_files (
--   person_id integer not null references persons (person_id),
--   uuid uuid not null references files (uuid) on delete cascade
-- );
-- alter table persons add constraint foreign key (avatar_uuid) references files (uuid);

create table plan_files (
  plan_id integer not null references plans (plan_id),
  uuid uuid not null references files (uuid) on delete cascade
);

create table project_files (
  project_id integer not null references projects (project_id),
  uuid uuid not null references files (uuid) on delete cascade
);

create table spec_files (
  spec_id integer not null references specs (spec_id),
  uuid uuid not null references files (uuid) on delete cascade
);

create table task_files (
  task_id integer not null references tasks (task_id),
  uuid uuid not null references files (uuid) on delete cascade
);
