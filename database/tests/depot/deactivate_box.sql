\set tested_mutation api.deactivate_box

select api.deactivate_box(
  :new_box_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
