rollback;

\i psql_scripts/set_psql_variables.sql

\set ON_ERROR_STOP on

begin transaction;

-- allocation
\i api/allocation/allocation_statuses.sql
\i api/allocation/approve_task_allocations.sql
\i api/allocation/create_task_allocation.sql
\i api/allocation/delete_task_allocations.sql
\i api/allocation/finish_task_allocations.sql
\i api/allocation/modify_qty_approved.sql
\i api/allocation/modify_qty_proposed.sql
\i api/allocation/transfers_between_depots.sql
-- asset
\i api/asset/add_child_to_asset.sql
\i api/asset/add_parent_to_asset.sql
\i api/asset/add_tag_to_asset.sql
\i api/asset/appliances.sql
\i api/asset/asset_categories.sql
\i api/asset/asset_statuses.sql
\i api/asset/assets.sql
\i api/asset/create_appliance.sql
\i api/asset/create_asset_note.sql
\i api/asset/create_asset_status_event.sql
\i api/asset/create_asset.sql
\i api/asset/create_monitor_read.sql
\i api/asset/create_monitor.sql
\i api/asset/create_tag.sql
\i api/asset/delete_tag.sql
\i api/asset/facilities.sql
\i api/asset/get_asset_children.sql
\i api/asset/get_asset_parents.sql
\i api/asset/modify_appliance.sql
\i api/asset/modify_asset.sql
\i api/asset/modify_monitor_read.sql
\i api/asset/modify_monitor.sql
\i api/asset/modify_tag.sql
\i api/asset/monitor_categories.sql
\i api/asset/remove_child_from_asset.sql
\i api/asset/remove_parent_from_asset.sql
\i api/asset/remove_tag_from_asset.sql
\i api/asset/set_monitor_next_read_date.sql
\i api/asset/tags.sql
-- billing
\i api/billing/create_billing.sql
\i api/billing/create_invoice.sql
\i api/billing/modify_billing.sql
-- dashboard
\i api/dashboard/dashboard_data.sql
-- depot
\i api/depot/activate_depot.sql
\i api/depot/create_depot.sql
\i api/depot/create_supply.sql
\i api/depot/deactivate_depot.sql
\i api/depot/depot_categories.sql
\i api/depot/modify_depot.sql
\i api/depot/modify_supply.sql
\i api/depot/supply_categories.sql
\i api/depot/units.sql
-- files
\i api/files/delete_avatar.sql
\i api/files/delete_file.sql
\i api/files/modify_avatar.sql
\i api/files/upload_asset_files.sql
\i api/files/upload_billing_files.sql
\i api/files/upload_depot_files.sql
\i api/files/upload_plan_files.sql
\i api/files/upload_project_files.sql
\i api/files/upload_task_files.sql
-- firm
\i api/firm/create_firm.sql
\i api/firm/modify_firm.sql
-- plan
\i api/plan/add_asset_to_task_template.sql
\i api/plan/create_plan.sql
\i api/plan/create_task_from_template.sql
\i api/plan/create_task_template.sql
\i api/plan/modify_plan.sql
\i api/plan/modify_task_template.sql
\i api/plan/periodicities.sql
\i api/plan/remove_asset_from_task_template.sql
-- project
\i api/project/activate_project.sql
\i api/project/add_task_to_project.sql
\i api/project/create_project.sql
\i api/project/deactivate_project.sql
\i api/project/delete_project.sql
\i api/project/modify_project.sql
\i api/project/projects.sql
\i api/project/remove_task_from_project.sql
-- task
\i api/task/add_asset_to_task.sql
\i api/task/close_task.sql
\i api/task/create_task_note.sql
\i api/task/create_task.sql
\i api/task/delete_task_note.sql
\i api/task/filter_tasks.sql
\i api/task/follow_task.sql
\i api/task/modify_task_note.sql
\i api/task/modify_task.sql
\i api/task/remove_asset_from_task.sql
\i api/task/send_task.sql
\i api/task/set_task_date_end.sql
\i api/task/set_task_date_limit.sql
\i api/task/set_task_status.sql
\i api/task/task_categories.sql
\i api/task/task_priorities.sql
\i api/task/task_statuses.sql
\i api/task/tasks.sql
\i api/task/unfollow_task.sql
-- team
\i api/team/activate_team.sql
\i api/team/add_person_to_team.sql
\i api/team/change_password.sql
\i api/team/create_person.sql
\i api/team/create_team.sql
\i api/team/deactivate_person.sql
\i api/team/deactivate_team.sql
\i api/team/modify_myself.sql
\i api/team/modify_person.sql
\i api/team/modify_team.sql
\i api/team/persons.sql
\i api/team/reactivate_person.sql
\i api/team/remove_person_from_team.sql
\i api/team/set_my_team.sql
\i api/team/teams.sql
-- utilities
\i api/utilities/create_energy_bills.sql
\i api/utilities/create_water_bill.sql
\i api/utilities/energy_bills.sql
\i api/utilities/modify_energy_bill_note.sql
\i api/utilities/modify_water_bill.sql
\i api/utilities/water_bills.sql

commit transaction;

\i psql_scripts/unset_psql_variables.sql
