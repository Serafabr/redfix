create table files (
  uuid uuid primary key,
  filename text not null,
  size bigint not null,
  created_at timestamptz not null default now(),
  person_id integer not null references persons (person_id) default get_person_id()
);

create table task_files (
  task_id integer not null references tasks (task_id),
  uuid uuid not null references files (uuid)
);

create table spec_files (
  spec_id integer not null references specs (spec_id),
  uuid uuid not null references files (uuid)
);
