\set function_name api.deactivate_box

drop function if exists :function_name;
create or replace function :function_name (
  in "boxId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from active_boxes where box_id = "boxId";
      id = "boxId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `boxId`\n
\n
Output `id`: the same as `boxId` input
';

grant execute on function :function_name to coordinator, supervisor;
