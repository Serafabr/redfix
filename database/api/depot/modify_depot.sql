\set function_name api.modify_depot

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "depotSf" text,
  in "depotCategoryId" integer,
  in "NAME" text,
  in "DESCRIPTION" text,
  in "parentId" integer default null,
  in "firmId" integer default null,
  in "materialDefaultBdi" numeric default 0,
  in "serviceDefaultBdi" numeric default 0,
  in "dateSign" date default null,
  in "datePub" date default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "URL" text default null,
  in "SIGAD" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update depots set
        depot_sf = "depotSf",
        depot_category_id = "depotCategoryId",
        name = "NAME",
        description = "DESCRIPTION",
        parent_id = "parentId",
        firm_id = "firmId",
        material_default_bdi = "materialDefaultBdi",
        service_default_bdi = "serviceDefaultBdi",
        date_sign = "dateSign",
        date_pub = "datePub",
        date_start = "dateStart",
        date_end = "dateEnd",
        url = "URL",
        sigad = "SIGAD"
      where depot_id = "depotId";
      insert into depot_events values (
        default,
        id,
        'modification',
        now(),
        get_person_id(),
        'Modificação do estoque'
      );
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `depotId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
