\set function_name api.insert_person

drop function if exists :function_name;
create or replace function :function_name (
  in "username" text,
  in "cpf" text,
  in "email" text,
  -- in "teamId" integer,
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
      insert into persons values (
        default,
        "username",
        "cpf",
        "email",
        "name",
        -- "teamId",
        "phone",
        "cellphone",
        crypt('123456', gen_salt('bf', 10)), 
        true,
        "personRole"
      ) returning person_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'`personId` of the new person/account\n') as new_comment \gset

comment on function :function_name is :'new_comment';
