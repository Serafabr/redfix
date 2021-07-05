\set function_name api.reactivate_person

drop function if exists :function_name;
create or replace function :function_name (
  in "personId" integer,
  in "personRole" text default 'visitor',
  out id integer
)
  language plpgsql
  security definer
  as $$
    begin
      update persons set
        password_hash = ext.crypt(get_default_password(), get_random_salt()), 
        person_role = "personRole"
      where
        person_id = "personId" and
        -- avoids changing active user
        password_hash is null
      returning person_id into id;
      -- id = "personId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'the same as `personId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
