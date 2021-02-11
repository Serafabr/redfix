\set function_name api.modify_avatar

drop function if exists :function_name;
create or replace function :function_name (
  in avatar_metadata files,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      id = get_person_id();
      with x as (
        select avatar_uuid from persons where person_id = id
      ) delete from files using x where uuid = x.avatar_uuid;
      perform insert_files(array[avatar_metadata]);
      update persons set avatar_uuid = avatar_metadata.uuid where person_id = id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `avatarMetadata.filename`\n
* `avatarMetadata.uuid`\n
* `avatarMetadata.size`\n
\n
Output `id`: the id of the person modifying his/her avatar
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
