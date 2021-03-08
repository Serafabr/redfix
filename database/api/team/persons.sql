drop view if exists api.persons;
create or replace view api.persons as
  select  p.person_id,
          p.username,
          p.cpf,
          p.email,
          -- p.team_id,
          p.name,
          p.phone,
          p.cellphone,
          p.is_active,
          p.person_role,
          coalesce(t.teams, jsonb_build_array()) as teams
  from persons as p
  left join (
    select  tp.person_id,
            jsonb_agg(jsonb_build_object(
              'teamId', t.team_id,
              'name', t.name
            ) order by t.name) as teams
    from team_persons as tp
    inner join teams as t using (team_id)
    group by tp.person_id
  ) as t using (person_id)
;
