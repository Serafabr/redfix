\set function_name api.modify_person

drop function if exists :function_name;
create or replace function :function_name (
  in "personId" integer,
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
        -- "teamId",
        "name",
        "phone",
        "cellphone",
        "personRole"
      ) where person_id = "personId";
      id = "personId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'`personId` of the modified person\n') as new_comment \gset

comment on function :function_name is :'new_comment';
