\set tested_mutation api.create_asset_status_event

select api.create_asset_status_event(
  :new_appliance_id,
  '2021-01-01T23:00:00'::timestamptz,
  4,
  'Houve um problema neste dia'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
