\set function_name api.modify_spec_version

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
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
      update specs as z set (
        name,
        spec_category_id,
        spec_subcategory_id,
        unit,
        spec_composition_id,
        description,
        materials,
        services,
        activities,
        qualification,
        notes,
        criteria,
        spreadsheets,
        lifespan,
        commercial_refs,
        external_refs,
        old_refs,
        is_subcontractable,
        catmat,
        catser,
        updated_at,
        updated_by
      ) = (
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
        get_person_id()
      ) where z.spec_id = "specId";
      id = "specId";
    end;
  $$
;

grant execute on function :function_name to coordinator;

select generate_api_documentation(:'function_name',E'Output `id`: `specId` of the modified spec\n') as new_comment \gset

comment on function :function_name is :'new_comment';
