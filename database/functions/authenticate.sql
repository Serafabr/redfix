drop function if exists web.authenticate;

create or replace function web.authenticate (
  in input_email    text,
  in input_password text,
  out authenticated_person jsonb
)
  language sql
  stable
  strict
  security definer
  as $$
    with person_data as (
      select  p.person_id,
              p.cpf,
              p.email,
              p.name,
              a.person_role
        from persons as p
        inner join private.accounts as a using (person_id)
      where p.email = input_email
      and a.password_hash = crypt(input_password, a.password_hash)
      and a.is_active
    ),
    person_teams as (
      select  jsonb_agg(jsonb_build_object(
                'teamId', t.team_id,
                'name', t.name
              )) as teams
      from team_persons as tp
      inner join person_data as pd on (tp.person_id = pd.person_id)
      inner join teams as t on (t.team_id = tp.team_id)
    )
    select  jsonb_build_object(
              'personId', pd.person_id,
              'cpf', pd.cpf,
              'email', pd.email,
              'name', pd.name,
              'role', pd.person_role,
              'teams', pt.teams
            ) as authenticated_person
    from person_data as pd, person_teams as pt
  $$
;
