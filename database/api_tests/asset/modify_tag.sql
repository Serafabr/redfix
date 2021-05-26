\set tested_mutation api.modify_tag

select api.modify_tag(
  :new_tag_id,
  'Comissão Diretora do SF'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
