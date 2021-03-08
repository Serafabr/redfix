drop view if exists api.teams;
create or replace view api.teams as
  select t.team_id, 
         t.name,
         t.description,
         t.is_active,
         coalesce(m.member_count, 0) as member_count,
         coalesce(m.members, jsonb_build_array()) as members
  from teams as t
  left join (
    select  tp.team_id,
            count(*) as member_count,
            jsonb_agg(jsonb_build_object(
              'personId', p.person_id,
              'name', p.name
            ) order by p.name) as members
    from team_persons as tp
    inner join persons as p using (person_id)
    group by tp.team_id
  ) as m using (team_id)
;
