\set function_name api.modify_person

drop function if exists :function_name;
create or replace function :function_name (
  in "personId" integer,
  in "USERNAME" text,
  in "CPF" text,
  in "EMAIL" text,
  in "NAME" text,
  in "PHONE" text,
  in "personRole" text,
  in "CELLPHONE" text default null,
  out id integer
)
  language plpgsql
  security definer
  as $$
    begin
      update persons set
        username = "USERNAME",
        cpf = "CPF",
        email = "EMAIL",
        name = "NAME",
        phone = "PHONE",
        cellphone = "CELLPHONE",
        person_role = "personRole"
      where person_id = "personId";
      id = "personId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'`personId` of the modified person\n') as new_comment \gset

comment on function :function_name is :'new_comment';
