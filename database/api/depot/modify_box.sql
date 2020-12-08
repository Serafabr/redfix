\set function_name api.modify_box

drop function if exists :function_name;
create or replace function :function_name (
  in "boxId" integer,
  in "boxSf" text,
  in note text,
  out id integer
)
  language plpgsql
  as $$
    declare
      new_note alias for note;
    begin
      update boxes as b set (
        box_sf,
        note
      ) = (
        "boxSf",
        new_note
      ) where b.box_id = "boxId"
      returning b.box_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `boxId`\n
* `boxSf`\n
\n
Output `id`: the same as `boxId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
