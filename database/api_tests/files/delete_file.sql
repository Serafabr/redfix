\set tested_mutation api.delete_file

select api.delete_file(
  'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'::uuid
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
