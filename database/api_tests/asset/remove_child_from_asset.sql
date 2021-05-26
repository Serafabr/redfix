\set tested_mutation api.remove_child_from_asset

select api.remove_child_from_asset(
  :new_asset_id,
  104
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
