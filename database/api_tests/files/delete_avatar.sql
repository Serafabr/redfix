\set tested_mutation api.delete_avatar

select api.delete_avatar(

) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
