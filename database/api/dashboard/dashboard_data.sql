drop view if exists api.dashboard_data;
create or replace view api.dashboard_data as
  select  created_at,
          total_tasks,
          delayed_tasks,
          finished_tasks,
          cancelled_tasks,
          total_assets,
          total_facilities,
          total_appliances
  from dashboard
;
