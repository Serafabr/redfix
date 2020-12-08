drop materialized view if exists asset_contexts;
create materialized view asset_contexts as
  select  a.asset_id,
          a.asset_sf,
          a.name
    from asset_relations as ar
    inner join assets as a using (asset_id)
  where ar.parent_id is null
;

drop materialized view if exists active_boxes;
create materialized view active_boxes as
  select  d.*,
          b.box_sf,
          b.note
  from depots as d
  inner join boxes as b using (box_id)
;
