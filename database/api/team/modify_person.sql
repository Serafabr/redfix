\set function_name api.modify_person

drop function if exists :function_name;
create or replace function :function_name (
  in "personId" integer,
  in "username" text,
  in "cpf" text,
  in "email" text,
  in "name" text,
  in "phone" text,
  in "personRole" text,
  in "cellphone" text default null,
  out id integer
)
  language plpgsql
  security definer
  as $$
    begin
      update persons set (
        username,
        cpf,
        email,
        name,
        phone,
        cellphone,
        person_role
      ) = (
        "username",
        "cpf",
        "email",
        "name",
        "phone",
        "cellphone",
        "personRole"
      ) where person_id = "personId";
      id = "personId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `attributes.personId`\n
* `attributes.username`\n
* `attributes.cpf`\n
* `attributes.email`\n
* `attributes.name`\n
* `attributes.phone`\n
* `attributes.personRole`\n
\n

';

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'Output `id`: `personId` of the modified person\n') as new_comment \gset

comment on function :function_name is :'new_comment';
