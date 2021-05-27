\set tested_mutation api.change_password

select api.change_password(
  get_default_password()
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
