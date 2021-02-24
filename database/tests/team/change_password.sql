select api.change_password(
  '123456'
), :mutation_ok + 1 as mutation_ok \gset
