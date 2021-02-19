\set function_name api.insert_depot

drop function if exists :function_name;
create or replace function :function_name (
  in "depotSf" text,
  in "depotCategoryId" integer,
  in "title" text,
  in "description" text,
  in "dateSign" date default null,
  in "datePub" date default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "firmId" integer default null,
  in "url" text default null,
  in "sigad" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into depots values (
        default,
        "depotSf",
        now(),
        now(),
        1,
        1,
        "depotCategoryId",
        "dateSign",
        "datePub",
        "dateStart",
        "dateEnd",
        "firmId",
        "title",
        "description",
        "url",
        "sigad"
      ) returning depot_id into id;
      insert into depot_events values (
        default,
        id,
        'insert_depot'::depot_event_enum,
        now(),
        get_person_id(),
        'Criação do estoque'
      );
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `depotId` of the new depot\n') as new_comment \gset

comment on function :function_name is :'new_comment';
