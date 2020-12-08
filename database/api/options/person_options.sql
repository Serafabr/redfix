drop view if exists api.person_options;
create or replace view api.person_options as
  with
    team_options as (
      select  coalesce(jsonb_agg(jsonb_build_object(
                'teamId', t.team_id,
                'name', t.name,
                'description', t.description
              ) order by t.name), jsonb_build_array()) as team_options
      from teams as t
      where t.is_active
    ),
    role_options as (
      select  jsonb_agg(jsonb_build_object(
                'personRole', r.person_role,
                'personRoleText', r.person_role_text
              ) order by r.person_role_text) as role_options
      from person_roles as r
      where r.person_role not in ('administrator', 'visitor')
    )
  select  team_options,
          role_options
  from  team_options,
        role_options
;
