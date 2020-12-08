\set function_name api.change_password

drop function if exists api.change_password;
create or replace function api.change_password (
  in password text,
  out id integer
)
  language plpgsql
  security definer
  strict
  as $$
    begin
      update persons
        set password_hash = crypt(password, gen_salt('bf', 10))
      where person_id = get_person_id()
      returning person_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `password`\n
\n
Output `id`: `personId` of the modified person/account
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
