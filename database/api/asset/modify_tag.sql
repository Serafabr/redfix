\set function_name api.modify_tag

drop function if exists :function_name;
create or replace function :function_name (
  in "tagId" integer,
  in "tagText" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      update tags set tag_text = "tagText" where tag_id = "tagId";
      id = "tagId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`tagId` of the modified tag\n') as new_comment \gset

comment on function :function_name is :'new_comment';
