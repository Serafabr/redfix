\set function_name api.insert_person

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
      insert into persons values (
        default,
        attributes.username,
        attributes.cpf,
        attributes.email,
        attributes.name,
        attributes.phone,
        attributes.cellphone,
        crypt('123456', gen_salt('bf', 10)), 
        true,
        attributes.person_role
      ) returning person_id into id;
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
* `attributes.personRole`\n
\n
Output `id`: `personId` of the new person/account
';

grant execute on function :function_name to coordinator, supervisor;
