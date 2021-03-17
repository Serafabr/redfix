\set function_name api.create_box

drop function if exists :function_name;
create or replace function :function_name (
  in "boxSf" text,
  in "depotId" integer,
  in "isInternal" boolean,
  in "materialDefaultBdi" numeric default 0,
  in "serviceDefaultBdi" numeric default 0,
  in "boxId" integer default null, -- id of the box to copy supplies from
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into boxes as b values (
        default,
        "boxSf",
        "depotId",
        "isInternal",
        "materialDefaultBdi",
        "serviceDefaultBdi"
      ) returning b.box_id into id;
      if "boxId" is not null then
        insert into supplies as s (
          -- omit supply_id column: default value
          spec_id,
          box_id,
          qty_initial,
          price,
          bdi
        ) select
          ss.spec_id,
          id,
          ss.qty_initial,
          ss.price,
          ss.bdi
        from supplies as ss where ss.box_id = "boxId";
      end if;
      insert into depot_events values (
        default,
        "depotId",
        'create_box'::depot_event_enum,
        now(),
        get_person_id(),
        "note"
      );
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`boxId` of the new box\n') as new_comment \gset

comment on function :function_name is :'new_comment';
