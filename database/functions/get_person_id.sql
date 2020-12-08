\set function_name get_person_id

drop function if exists :function_name;
create or replace function :function_name (
  out person_id integer
)
  language sql
  as $$
    select current_setting('cookie.session.person_id')::integer as person_id;
  $$
;

grant execute on function :function_name to cmms_user;
