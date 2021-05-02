\set function_name web.update_dashboard

drop function if exists :function_name;
create or replace function :function_name (
  out updated_at timestamptz
)
  language plpgsql
  as $$
    begin
      with t as (
        select
          sum(1) as total_tasks,
          sum(case when date_limit < current_date then 1 else 0 end) as delayed_tasks,
          sum(case when task_status_id = 7 then 1 else 0 end) as finished_tasks,
          sum(case when task_status_id = 6 then 1 else 0 end) as cancelled_tasks
        from tasks
      ),
      a as (
        select
          sum(1) as total_assets,
          sum(case when asset_category_id = 1 then 1 else 0 end) as total_facilities,
          sum(case when asset_category_id <> 1 then 1 else 0 end) as total_appliances
        from assets
      ),
      p as (
        select
          sum(1) as total_persons,
          sum(case when is_active then 1 else 0 end) as total_active_persons
        from persons
      ),
      d as (
        select
          sum(1) as total_depots,
          sum(case when is_active then 1 else 0 end) as total_active_depots
        from depots
      )
      insert into dashboard select
        now(),
        coalesce(total_tasks, 0),
        coalesce(delayed_tasks, 0),
        coalesce(finished_tasks, 0),
        coalesce(cancelled_tasks, 0),
        coalesce(total_assets, 0),
        coalesce(total_facilities, 0),
        coalesce(total_appliances, 0),
        coalesce(total_persons, 0),
        coalesce(total_active_persons, 0),
        coalesce(total_depots, 0),
        coalesce(total_active_depots, 0)
      from t,a,p,d;
      updated_at = now();
    end;
  $$
;
