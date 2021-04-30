\set function_name web.authenticate

drop function if exists :function_name;
create or replace function :function_name (
  in username text,
  in password text,
  out authenticated_person jsonb
)
  language plpgsql
  stable
  strict
  security definer
  as $$
    declare
      input_string alias for username;
    begin
      with person_data as (
        select  p.person_id,
                p.username,
                p.cpf,
                p.email,
                p.name,
                p.person_role,
                p.team_id
        from persons as p
        where
          case input_string
            when p.username then p.password_hash = crypt(password, p.password_hash) and p.is_active
            when p.email then p.password_hash = crypt(password, p.password_hash) and p.is_active
            when p.cpf then p.password_hash = crypt(password, p.password_hash) and p.is_active
            else false
          end
        fetch first row only -- this is to speed up the query
      ),
      person_teams as (
        select  jsonb_agg(jsonb_build_object(
                  'teamId', t.team_id,
                  'name', t.name
                ) order by t.name) as teams
        from person_data as pd
        inner join team_persons as tp on (tp.person_id = pd.person_id)
        inner join teams as t on (t.team_id = tp.team_id)
      )
      select  jsonb_build_object(
                'personId', pd.person_id,
                'username', pd.username,
                'cpf', pd.cpf,
                'email', pd.email,
                'name', pd.name,
                'role', pd.person_role,
                'teamId', pd.team_id,
                'teams', pt.teams
              ) into authenticated_person
      from  person_data as pd,
            person_teams as pt;
    end;
  $$
;

grant execute on function :function_name to cmms_user;
