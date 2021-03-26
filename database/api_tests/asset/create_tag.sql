\set tested_mutation api.create_tag

select api.create_tag(
  'Comissão Diretora'
) as new_tag_id \gset

select api.create_tag(
  'Comissão Diretora'
) as tag_to_be_deleted \gset

\set all_mutations :all_mutations:tested_mutation,
