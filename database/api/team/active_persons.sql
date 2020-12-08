drop view if exists api.active_persons;
create or replace view api.active_persons as
  select  p.person_id,
          p.username,
          p.cpf,
          p.email,
          p.name,
          p.phone,
          p.cellphone,
          p.person_role
  from persons as p
  where p.is_active
;
