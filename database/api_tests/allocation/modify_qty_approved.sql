\set tested_mutation api.modify_qty_approved

select api.modify_qty_approved(
  :new_alloc_id,
  9
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
