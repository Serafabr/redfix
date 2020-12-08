\set function_name api.remove_tag

drop function if exists :function_name;
create or replace function :function_name (
  in "tagId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from tags where tag_id = "tagId";
      id = "tagId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `tagId`\n
\n
Output `id`: the same as `tagId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
