\set function_name api.modify_box

drop function if exists :function_name;
create or replace function :function_name (
  in "boxId" integer,
  in "boxSf" text,
  out id integer
)
  language plpgsql
  as $$
    begin
    with old_values as (
      select box_sf, depot_id from boxes where box_id = "boxId"
    ) insert into depot_events (
      depot_id,
      depot_event_name,
      created_at,
      person_id,
      note
    ) select
      ov.depot_id,
      'modify_box'::depot_event_enum,
      now(),
      get_person_id(),
      'Caixa ' || ov.box_sf || ' renomeada para ' || "boxSf"
    from old_values as ov;
    update boxes set box_sf = "boxSf" where box_id = "boxId";
    id = "boxId";
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
