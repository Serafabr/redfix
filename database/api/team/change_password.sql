\set function_name api.change_password

drop function if exists api.change_password;
create or replace function api.change_password (
  in "newPassword" text,
  out id integer
)
  language plpgsql
  security definer
  as $$
    declare
      "personId" constant integer = get_person_id();
    begin
      update persons set password_hash = crypt("newPassword", gen_salt('bf', 10)) where person_id = "personId";
      id = "personId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`personId` of the modified person/account\n') as new_comment \gset

comment on function :function_name is :'new_comment';
