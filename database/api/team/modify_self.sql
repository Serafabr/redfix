\set function_name api.modify_self

drop function if exists :function_name;
create or replace function :function_name (
  in "username" text,
  in "cpf" text,
  in "email" text,
  in "name" text,
  in "phone" text,
  in "cellphone" text default null,
  out id integer
)
  language plpgsql
  security definer
  strict
  as $$
    begin
      update persons set (
        username,
        cpf,
        email,
        name,
        phone,
        cellphone
      ) = (
        "username",
        "cpf",
        "email",
        "name",
        "phone",
        "cellphone"
      ) where person_id = get_person_id();
      id = get_person_id();
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: `personId` of the modified person\n') as new_comment \gset

comment on function :function_name is :'new_comment';
