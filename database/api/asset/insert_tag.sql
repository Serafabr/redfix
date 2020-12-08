\set function_name api.insert_tag

drop function if exists :function_name;
create or replace function :function_name (
  in tag_text text,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into tags as t values (
        default,
        tag_text
      ) returning t.tag_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `tagText`\n
\n
Output `id`: `tagId` of the new tag
';

grant execute on function :function_name to coordinator, supervisor, inspector;
