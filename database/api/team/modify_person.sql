\set function_name api.modify_person

drop function if exists :function_name;
create or replace function :function_name (
  in attributes persons,
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
        cellphone,
        person_role
      ) = (
        attributes.username,
        attributes.cpf,
        attributes.email,
        attributes.name,
        attributes.phone,
        attributes.cellphone,
        attributes.person_role
      ) where person_id = attributes.person_id
      returning person_id into id;
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
Output `id`: `personId` of the modified person
';

grant execute on function :function_name to coordinator, supervisor;
