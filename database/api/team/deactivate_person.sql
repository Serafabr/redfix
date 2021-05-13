\set function_name api.deactivate_person

drop function if exists :function_name;
create or replace function :function_name (
  in "personId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update persons set
        password_hash = null,
        person_role = 'visitor'
      where person_id = "personId";
      id = "personId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'the same as `personId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
