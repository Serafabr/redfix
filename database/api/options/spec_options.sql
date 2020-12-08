drop view if exists api.spec_options;
create or replace view api.spec_options as
  with
    categories as (
      select  jsonb_agg(jsonb_build_object(
                'specCategoryId', spec_category_id,
                'specCategoryText', spec_category_text
              )) as categories
      from spec_categories
    ),
    subcategories as (
      select  jsonb_agg(jsonb_build_object(
                'specCategoryId', spec_category_id,
                'specSubcategoryId', spec_subcategory_id,
                'specSubcategoryText', spec_subcategory_text
              )) as subcategories
      from spec_subcategories
    )
  select  categories,
          subcategories
  from  categories,
        subcategories
;
