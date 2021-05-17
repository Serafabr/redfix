\set function_name api.create_person

drop function if exists :function_name;
create or replace function :function_name (
  in "username" text,
  in "cpf" text,
  in "email" text,
  in "name" text,
  in "phone" text,
  in "personRole" text,
  in "cellphone" text default null,
  in "teamId" integer default null,
  out id integer
)
  language plpgsql
  security definer
  as $$
    begin
      insert into persons values (
        default,
        "username",
        "cpf",
        "email",
        "name",
        "phone",
        "cellphone",
        ext.crypt('123456', get_random_salt()), 
        "personRole",
        "teamId"
      ) returning person_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'`personId` of the new person/account\n') as new_comment \gset

comment on function :function_name is :'new_comment';
