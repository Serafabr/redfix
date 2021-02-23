\set function_name api.insert_spec

drop function if exists :function_name;
create or replace function :function_name (
  in "specSf" text,
  in "version" text,
  in "name" text,
  in "specCategoryId" integer,
  in "specSubcategoryId" integer,
  in "unit" text,
  in "specCompositionId" integer,
  in "description" text default null,
  in "materials" text default null,
  in "services" text default null,
  in "activities" text default null,
  in "qualification" text default null,
  in "notes" text default null,
  in "criteria" text default null,
  in "spreadsheets" text default null,
  in "lifespan" text default null,
  in "commercialRefs" text default null,
  in "externalRefs" text default null,
  in "oldRefs" text default null,
  in "isSubcontractable" text default null,
  in "catmat" text default null,
  in "catser" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into specs values (
        default,
        "specSf",
        "version",
        "name",
        "specCategoryId",
        "specSubcategoryId",
        "unit",
        "specCompositionId",
        "description",
        "materials",
        "services",
        "activities",
        "qualification",
        "notes",
        "criteria",
        "spreadsheets",
        "lifespan",
        "commercialRefs",
        "externalRefs",
        "oldRefs",
        "isSubcontractable",
        "catmat",
        "catser",
        now(),
        now(),
        get_person_id(),
        get_person_id()
      ) returning spec_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator;

select generate_api_documentation(:'function_name',E'`specId` of the new spec\n') as new_comment \gset

comment on function :function_name is :'new_comment';
