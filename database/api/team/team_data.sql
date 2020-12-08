drop view if exists api.team_data;

create or replace view api.team_data as
  with
    persons_of_team as (
      select  tp.team_id,
              jsonb_agg(jsonb_build_object(
                'personId', p.person_id,
                'name', p.name
              )) as persons
        from team_persons as tp
        inner join persons as p using (person_id)
      group by tp.team_id
    )
  select t.team_id, 
         t.name,
         t.description,
         coalesce(p.persons, jsonb_build_array()) as persons
  from teams as t
  left join persons_of_team as p using (team_id)
;
