\set function_name api.remove_avatar

drop function if exists :function_name;
create or replace function :function_name (
  out id integer
)
  language plpgsql
  as $$
    begin
      id = get_person_id();
      with x as (
        select avatar_uuid from persons where person_id = id
      ) delete from files using x where uuid = x.avatar_uuid;
      -- persons.avatar_uuid column will be set to null automatically
      -- because of 'on delete set null' clause in table definition
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `[no mandatory inputs]`\n
\n
Output `id`: the id of the person modifying his/her avatar
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
