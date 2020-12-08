drop view if exists api.team_options;
create or replace view api.team_options as
  select  p.person_id,
          p.username,
          p.name,
          p.cpf
  from persons as p
  where p.is_active
;
