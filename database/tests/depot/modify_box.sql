\set tested_mutation api.modify_box

select api.modify_box(
  :new_box_id,
  'Inicial'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
