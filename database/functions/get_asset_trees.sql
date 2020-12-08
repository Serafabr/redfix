drop function if exists get_asset_trees;

create or replace function get_asset_trees (
  in input_asset_id integer,
  out asset_id integer,
  out trees jsonb
)
  language sql
  stable
  as $$
    with recursive rec (top_id, parent_id, asset_id) as (
      select top_id, parent_id, asset_id
        from asset_relations
      where parent_id = input_asset_id
      union
      select a.top_id, a.parent_id, a.asset_id
        from rec as r
        inner join asset_relations as a on (r.asset_id = a.parent_id)
    ),
    agg_children as (
      select  r.top_id,
              r.parent_id,
              jsonb_agg(jsonb_build_object(
                'assetId', a.asset_id,
                'assetSf', a.asset_sf,
                'name', a.name,
                'categoryId', a.category,
                'categoryName', aa.name
              )) as child_assets
        from rec as r
        inner join assets as a using (asset_id)
        inner join assets as aa on (aa.asset_id = a.category)
      group by r.top_id, r.parent_id
    ),
    agg_parents as (
      select ac.top_id,
             jsonb_object_agg(
               ac.parent_id::text, ac.child_assets
             ) as relations
        from agg_children as ac
      group by ac.top_id
    ),
    agg_tops as (
      select jsonb_object_agg(
               ap.top_id::text, ap.relations
             ) as tree
        from agg_parents as ap
      group by ap.top_id
    )
    select input_asset_id as asset_id,
           jsonb_object_agg(
             'trees', ax.tree
           )->'trees' as trees
      from agg_tops as ax
    ;
  $$
;
