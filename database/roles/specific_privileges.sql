revoke all on table persons from public, cmms_user, supervisor, inspector, employee, visitor;

grant select (
  person_id,
  username,
  cpf,
  email,
  name,
  phone,
  cellphone,
  -- password_hash
  person_role,
  team_id,
  avatar_uuid
) on table persons to
  supervisor,
  inspector,
  employee,
  visitor
;

grant insert, update (
  person_id,
  username,
  cpf,
  email,
  name,
  phone,
  cellphone,
  -- password_hash
  person_role,
  team_id,
  avatar_uuid
) on table persons to
  supervisor
;

grant update (
  username,
  cpf,
  email,
  name,
  phone,
  cellphone,
  -- password_hash
  -- person_role
  team_id,
  avatar_uuid
) on table persons to
  supervisor,
  inspector,
  employee
;
