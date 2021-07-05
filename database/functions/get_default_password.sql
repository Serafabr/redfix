\set function_name get_default_password

drop function if exists :function_name;
create or replace function :function_name (
  out default_password text
)
  language plpgsql
  as $$
    begin
      select '123456' into default_password;
    end;
  $$
;
