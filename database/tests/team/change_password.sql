\set tested_mutation api.change_password

select api.change_password(
  '123456'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
