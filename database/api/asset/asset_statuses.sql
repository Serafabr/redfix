drop view if exists api.asset_statuses;
create or replace view api.asset_statuses as
  select
    asset_status_id,
    asset_status_text
  from asset_statuses
;
