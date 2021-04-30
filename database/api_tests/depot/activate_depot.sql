\set tested_mutation api.activate_depot

select api.activate_depot(
  :new_depot_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
