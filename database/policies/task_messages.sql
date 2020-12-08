alter table task_messages enable row level security;

create policy task_messages_policy_select on task_messages
  as permissive
  for select
  to public
  using (true)
;

create policy task_messages_policy_insert on task_messages
  as permissive
  for insert
  to public
  using (true)
;

create policy task_messages_policy_update on task_messages
  as permissive
  for update
  to public
  using (person_id = get_person_id())
;
