\set tested_mutation api.activate_box

select api.activate_box(
  :new_box_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
