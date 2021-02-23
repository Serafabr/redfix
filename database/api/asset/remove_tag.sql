\set function_name api.remove_tag

drop function if exists :function_name;
create or replace function :function_name (
  in "tagId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from tags where tag_id = "tagId";
      id = "tagId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `tagId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
