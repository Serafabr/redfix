\set function_name api.modify_tag

drop function if exists :function_name;
create or replace function :function_name (
  in tag_id integer,
  in tag_text text,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      new_tag_text alias for tag_text;
    begin
      id = tag_id;
      update tags as t set tag_text = new_tag_text where t.tag_id = id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `tagId`\n
* `tagText`\n
\n
Output `id`: `tagId` of the modified tag
';

grant execute on function :function_name to coordinator, supervisor, inspector;
