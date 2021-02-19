\set function_name api.deactivate_box

drop function if exists :function_name;
create or replace function :function_name (
  in "boxId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from active_boxes where box_id = "boxId";
      id = "boxId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `boxId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
