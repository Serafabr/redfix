\set tested_mutation api.upload_plan_files

select api.upload_plan_files(
  :new_plan_id,
  array[(
    ext.gen_random_uuid(),
    'filename',
    1000,
    'mimetype',
    null,
    null
  )::files]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
