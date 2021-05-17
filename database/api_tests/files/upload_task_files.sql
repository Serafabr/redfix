\set tested_mutation api.upload_task_files

select api.upload_task_files(
  :new_task_id,
  array[(
    ext.gen_random_uuid(),
    'filename',
    1000,
    null,
    null
  )::files]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
