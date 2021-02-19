\set function_name api.insert_box

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "boxSf" text,
  in "boxId" integer default null, -- id of the box to copy supplies from
  in "note" text default null,
  out id integer
)
  language plpgsql
  strict
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

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `boxId` of the new box\n') as new_comment \gset

comment on function :function_name is :'new_comment';
