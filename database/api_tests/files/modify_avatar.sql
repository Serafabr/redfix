\set tested_mutation api.modify_avatar

select api.modify_avatar(
  (
    ext.gen_random_uuid(),
    'filename',
    1000,
    'mimetype',
    null,
    null
  )::files
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
