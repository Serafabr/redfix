\set function_name api.insert_box

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "boxId" integer, -- id of the box to copy supplies from
  in "boxSf" text,
  in "note" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into boxes as b values (
        default,
        "boxSf",
        "depotId"
      ) returning b.box_id into id;
      if "boxId" is not null then
        insert into supplies as s (
          -- omit supply_id column: default value
          supply_sf,
          box_id,
          spec_id,
          qty_initial,
          price
        ) select
          ss.supply_sf,
          id,
          ss.spec_id,
          ss.qty_initial,
          ss.price
        from supplies as ss where ss.box_id = "boxId";
      end if;
      insert into depot_events values (
        default,
        "depotId",
        'insert_box'::depot_event_enum,
        now(),
        get_person_id(),
        "note"
      );
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `depotId`\n
* `boxSf`\n
\n
`boxId` is the id of the box to copy supplies from.
Output `id`: `boxId` of the new box
';

grant execute on function :function_name to coordinator, supervisor, inspector;
