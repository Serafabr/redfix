\set function_name api.modify_avatar

drop function if exists :function_name;
create or replace function :function_name (
  in avatar_metadata files,
  out id integer
)
  language plpgsql
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

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: the id of the person modifying his/her avatar\n') as new_comment \gset

comment on function :function_name is :'new_comment';
