select api.insert_project(
  'Nome do novo projeto',
  true
) as new_project_id, :mutation_ok + 1 as mutation_ok \gset
