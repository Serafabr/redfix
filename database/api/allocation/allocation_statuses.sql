drop view if exists api.allocation_statuses;
create or replace view api.allocation_statuses as
  select
    alloc_status_id,
    alloc_status_text
  from alloc_statuses
;
