select api.insert_task_files(
  :new_task_id,
  array[(
    gen_random_uuid(),
    'filename',
    1000,
    null,
    null
  )::files]
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
