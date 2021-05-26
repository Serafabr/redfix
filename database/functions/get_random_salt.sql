\set function_name get_random_salt

drop function if exists :function_name;
create or replace function :function_name (
  out random_salt text
)
  language plpgsql
  as $$
    begin
      select ext.gen_salt('bf', 8) into random_salt;
    end;
  $$
;
