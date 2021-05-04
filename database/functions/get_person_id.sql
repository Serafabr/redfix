\set function_name get_person_id

drop function if exists :function_name;
create or replace function :function_name (
  out personid integer
)
  language plpgsql
  as $$
    begin
      select current_setting('cookie.session.person_id')::integer into personid;
      if (personid is null)
        then perform raise_exception(601);
      end if;
    end;
  $$
;
