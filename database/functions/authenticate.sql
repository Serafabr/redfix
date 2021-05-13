\set function_name web.authenticate

drop function if exists :function_name;
create or replace function :function_name (
  in "username" text,
  in "password" text,
  out "authenticatedPerson" jsonb
)
  language plpgsql
  stable
  strict
  security definer
  as $$
    declare
      input_string alias for "username";
      column_to_search text;
    begin
      select case
        when input_string ~* '^\d{11}$' then 'cpf'
        when input_string ~* '^.+@.+\..+$' then 'email'
        else 'username'
      end into column_to_search;
      select jsonb_build_object(
        'personId', p.person_id,
        'username', p.username,
        'cpf', p.cpf,
        'email', p.email,
        'name', p.name,
        'role', p.person_role,
        'teamId', p.team_id,
        'teams', coalesce_list((
          select jsonb_agg(jsonb_build_object(
            'teamId', t.team_id,
            'name', t.name
          ) order by t.name)
          from team_persons as tp
          inner join teams as t using (team_id)
          where tp.person_id = p.person_id and t.is_active
        )),
        'tasks', coalesce_list((
          select jsonb_agg(jsonb_build_object(
            'taskId', t.task_id,
            'title', t.title
          ) order by t.task_id)
          from person_tasks as pt
          inner join tasks as t using (task_id)
          where pt.person_id = p.person_id
        ))
      ) into "authenticatedPerson"
      from persons as p
      where (
        case column_to_search
          when 'cpf' then p.cpf = input_string and p.password_hash = crypt("password", p.password_hash)
          when 'email' then p.email = input_string and p.password_hash = crypt("password", p.password_hash)
          when 'username' then p.username = input_string and p.password_hash = crypt("password", p.password_hash)
        end
      );
    end;
  $$
;

grant execute on function :function_name to cmms_user;
