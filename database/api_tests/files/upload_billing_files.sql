\set tested_mutation api.upload_billing_files

select api.upload_billing_files(
  :new_billing_id,
  array[(
    ext.gen_random_uuid(),
    'filename',
    1000,
    null,
    null
  )::files]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
