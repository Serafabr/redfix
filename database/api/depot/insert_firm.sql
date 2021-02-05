\set function_name api.insert_firm

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "nameRs" text,
  in "cnpj" text,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into firms values (
        default,
        "name",
        "nameRs",
        "cnpj"
      ) returning firm_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `name`\n
* `nameRs\n
* `cnpj`\n
\n
Output `id`: `firmId` of the new firm
';

grant execute on function :function_name to coordinator, supervisor, inspector;
