\set function_name get_person_id

drop function if exists :function_name;
create or replace function :function_name (
  out "personId" integer
)
  language plpgsql
  as $$
    begin
      select current_setting('cookie.session.person_id', true)::integer into "personId";
      if not found
        then perform raise_exception(601);
      end if;
    end;
  $$
;
