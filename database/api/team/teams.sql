drop view if exists api.teams;
create or replace view api.teams as
  select
    t.team_id, 
    t.name,
    t.description,
    t.is_active,
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'personId', p.person_id,
        'name', p.name,
        'role', p.person_role
      ) order by p.name)
      from team_persons as tp
      inner join persons as p using (person_id)
      where t.team_id = tp.team_id
    )) as persons
  from teams as t
;
