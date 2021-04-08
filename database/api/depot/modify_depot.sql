\set function_name api.modify_depot

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "depotSf" text,
  in "depotCategoryId" integer,
  in "TITLE" text,
  in "DESCRIPTION" text,
  in "dateSign" date default null,
  in "datePub" date default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "firmId" integer default null,
  in "URL" text default null,
  in "SIGAD" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update depots set
        depot_sf = "depotSf",
        updated_at = now(),
        updated_by = get_person_id(),
        depot_category_id = "depotCategoryId",
        date_sign = "dateSign",
        date_pub = "datePub",
        date_start = "dateStart",
        date_end = "dateEnd",
        firm_id = "firmId",
        title = "TITLE",
        description = "DESCRIPTION",
        url = "URL",
        sigad = "SIGAD"
      where depot_id = "depotId";
      insert into depot_events values (
        default,
        "depotId",
        'modify_depot'::depot_event_enum,
        now(),
        get_person_id(),
        'Modificação do estoque'
      );
      id = "depotId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`depotId` of the modified depot\n') as new_comment \gset

comment on function :function_name is :'new_comment';
