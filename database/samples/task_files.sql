select api.insert_task_files (
  1,
  array[(
    'de741848-5e90-4c5e-8699-78aca9b37aba',
    'test.txt',
    50,
    null,
    null
  )]::files[]
);
