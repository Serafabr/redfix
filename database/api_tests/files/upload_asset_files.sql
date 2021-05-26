\set tested_mutation api.upload_asset_files

select api.upload_asset_files(
  :new_asset_id,
  array[(
    'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'::uuid,
    'filename',
    1000,
    null,
    null
  )::files]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
