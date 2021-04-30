\set tested_mutation api.modify_qty_proposed

select api.modify_qty_proposed(
  :new_alloc_id,
  10
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
