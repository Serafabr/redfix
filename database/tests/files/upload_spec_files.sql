\set tested_mutation api.upload_spec_files

select api.upload_spec_files(
  :new_spec_id,
  array[(
    gen_random_uuid(),
    'filename',
    1000,
    null,
    null
  )::files]
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
