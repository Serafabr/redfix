\set function_name get_team_id

drop function if exists :function_name;
create or replace function :function_name (
  out id integer
)
  language plpgsql
  as $$
    begin
      select team_id into id from persons where person_id = current_setting('cookie.session.person_id')::integer;
    end;
  $$
;
