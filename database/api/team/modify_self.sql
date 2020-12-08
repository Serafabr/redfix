\set function_name api.modify_self

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
        cellphone
      ) = (
        attributes.username,
        attributes.cpf,
        attributes.email,
        attributes.name,
        attributes.phone,
        attributes.cellphone
      ) where person_id = get_person_id()
      returning person_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `attributes.username`\n
* `attributes.cpf`\n
* `attributes.email`\n
* `attributes.name`\n
* `attributes.phone`\n
\n
Output `id`: `personId` of the modified person
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
