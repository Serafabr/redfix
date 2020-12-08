\set function_name api.activate_box

drop function if exists :function_name;
create or replace function :function_name (
  in "boxId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      -- insert only if box_id does not exist in the table yet
      insert into active_boxes values ("boxId") on conflict do nothing;
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
