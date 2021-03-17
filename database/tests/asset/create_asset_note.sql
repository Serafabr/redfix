\set tested_mutation api.create_asset_note

select api.create_asset_note(
  :new_appliance_id,
  '2021-01-01T23:00:00'::timestamptz,
  'Pequeno relato sobre algo no equipamento'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
