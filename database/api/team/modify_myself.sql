\set function_name api.modify_myself

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
  as $$
    begin
      update persons as p set (
        username,
        cpf,
        email,
        name,
        phone,
        cellphone
      ) = (select new_values.*)
      from (select
        "username",
        "cpf",
        "email",
        "name",
        "phone",
        "cellphone"
      ) as new_values
      where p.person_id = get_person_id();
      id = get_person_id();
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`personId` of the modified person\n') as new_comment \gset

comment on function :function_name is :'new_comment';
