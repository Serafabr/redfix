\set tested_mutation api.add_parent_to_asset

select api.add_parent_to_asset(
  :new_asset_id,
  103
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
