\set function_name api.create_tag

drop function if exists :function_name;
create or replace function :function_name (
  in "tagText" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into tags as t values (default, "tagText") returning t.tag_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`tagId` of the new tag\n') as new_comment \gset

comment on function :function_name is :'new_comment';
