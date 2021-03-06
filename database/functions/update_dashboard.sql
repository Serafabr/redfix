\set function_name web.update_dashboard

drop function if exists :function_name;
create or replace function :function_name (
  out updated_at timestamptz
)
  language plpgsql
  security definer
  as $$
    begin
      with t as (
        select
          sum(1) as total_tasks,
          sum(case when date_limit < current_date then 1 else 0 end) as delayed_tasks,
          sum(case when task_status_id = 7 then 1 else 0 end) as finished_tasks,
          sum(case when task_status_id = 8 then 1 else 0 end) as closed_tasks,
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
          sum(case person_role when 'supervisor' then 1 else 0 end) as total_supervisors,
          sum(case person_role when 'inspector' then 1 else 0 end) as total_inspectors,
          sum(case person_role when 'employee' then 1 else 0 end) as total_employees,
          sum(case person_role when 'visitor' then 1 else 0 end) as total_visitors
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
        coalesce(total_supervisors, 0),
        coalesce(total_inspectors, 0),
        coalesce(total_employees, 0),
        coalesce(total_visitors, 0),
        coalesce(total_depots, 0),
        coalesce(total_active_depots, 0)
      from t,a,p,d;
      updated_at = now();
    end;
  $$
;

grant execute on function :function_name to cmms_user;
