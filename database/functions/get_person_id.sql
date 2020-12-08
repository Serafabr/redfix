drop function if exists get_person_id;

create or replace function get_person_id(
  out person_id integer
)
  language sql
  as $$
    select current_setting('cookie.session.person_id')::integer as person_id;
  $$
;
