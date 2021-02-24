select api.remove_file(
  'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'::uuid
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
