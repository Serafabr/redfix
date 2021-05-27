drop view if exists api.deactivated_persons;
create or replace view api.deactivated_persons as
  select
    p.person_id,
    p.username,
    p.cpf,
    p.email,
    p.name,
    p.phone,
    p.cellphone,
    p.person_role
  from persons as p
  where p.password_hash is null
;
