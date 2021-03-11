\set function_name api.activate_box

drop function if exists :function_name;
create or replace function :function_name (
  in "boxId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      -- insert only if box_id does not exist in the table yet
      insert into active_boxes values ("boxId") on conflict (box_id) do nothing;
      id = "boxId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'the same as `boxId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
