-- asset
\i api_tests/asset/create_asset.sql
\i api_tests/asset/modify_asset.sql

\i api_tests/asset/create_appliance.sql
\i api_tests/asset/modify_appliance.sql

\i api_tests/asset/create_tag.sql
\i api_tests/asset/modify_tag.sql

\i api_tests/asset/add_child_to_asset.sql
\i api_tests/asset/remove_child_from_asset.sql

\i api_tests/asset/add_parent_to_asset.sql
\i api_tests/asset/remove_parent_from_asset.sql

\i api_tests/asset/add_tag_to_asset.sql
\i api_tests/asset/remove_tag_from_asset.sql
\i api_tests/asset/delete_tag.sql

\i api_tests/asset/create_asset_note.sql
\i api_tests/asset/create_asset_status_event.sql

\i api_tests/asset/create_monitor.sql
\i api_tests/asset/modify_monitor.sql
\i api_tests/asset/create_monitor_read.sql
\i api_tests/asset/modify_monitor_read.sql

-- team
\i api_tests/team/change_password.sql
\i api_tests/team/modify_myself.sql

\i api_tests/team/create_person.sql
\i api_tests/team/modify_person.sql

\i api_tests/team/create_team.sql
\i api_tests/team/modify_team.sql

\i api_tests/team/add_person_to_team.sql
\i api_tests/team/remove_person_from_team.sql

\i api_tests/team/activate_person.sql
\i api_tests/team/deactivate_person.sql

\i api_tests/team/activate_team.sql
\i api_tests/team/deactivate_team.sql

-- firm
\i api_tests/firm/create_firm.sql
\i api_tests/firm/modify_firm.sql

-- depot
\i api_tests/depot/create_depot.sql
\i api_tests/depot/modify_depot.sql

\i api_tests/depot/create_box.sql
\i api_tests/depot/modify_box.sql

\i api_tests/depot/create_spec.sql
\i api_tests/depot/modify_spec.sql

\i api_tests/depot/create_price.sql
\i api_tests/depot/modify_price.sql
\i api_tests/depot/delete_price.sql

\i api_tests/depot/create_supply.sql
\i api_tests/depot/modify_supply.sql
\i api_tests/depot/delete_supply.sql

\i api_tests/depot/deactivate_box.sql
\i api_tests/depot/activate_box.sql

-- task
\i api_tests/task/create_task.sql
\i api_tests/task/modify_task.sql
\i api_tests/task/add_asset_to_task.sql
\i api_tests/task/remove_asset_from_task.sql

\i api_tests/task/set_task_status.sql
\i api_tests/task/send_task.sql
\i api_tests/task/create_task_note.sql
\i api_tests/task/modify_task_note.sql
\i api_tests/task/delete_task_note.sql

\i api_tests/task/follow_task.sql
\i api_tests/task/unfollow_task.sql

\i api_tests/task/set_task_date_limit.sql

\i api_tests/task/clone_task.sql

-- project
\i api_tests/project/create_project.sql
\i api_tests/project/modify_project.sql
\i api_tests/project/deactivate_project.sql
\i api_tests/project/activate_project.sql
\i api_tests/project/add_task_to_project.sql
\i api_tests/project/remove_task_from_project.sql
\i api_tests/project/delete_project.sql

-- plans
\i api_tests/plan/create_plan.sql
\i api_tests/plan/modify_plan.sql
\i api_tests/plan/create_task_template.sql
\i api_tests/plan/modify_task_template.sql
\i api_tests/plan/add_asset_to_task_template.sql
\i api_tests/plan/remove_asset_from_task_template.sql
\i api_tests/plan/create_task_from_template.sql
-- \i api_tests/plan/finish_task.sql

-- invoices
\i api_tests/invoice/create_invoice.sql
\i api_tests/invoice/modify_invoice.sql

\i api_tests/invoice/create_allocation.sql
\i api_tests/invoice/approve_allocations.sql
\i api_tests/invoice/delete_allocations.sql

\i api_tests/invoice/modify_qty_proposed.sql
\i api_tests/invoice/modify_qty_approved.sql

\i api_tests/invoice/add_allocations_to_invoice.sql

\i api_tests/invoice/set_allocations_prices.sql

\i api_tests/invoice/set_invoice_paid.sql
\i api_tests/invoice/set_invoice_unpaid.sql

\i api_tests/invoice/delete_invoice.sql

-- files
\i api_tests/files/upload_asset_files.sql
\i api_tests/files/upload_depot_files.sql
\i api_tests/files/upload_plan_files.sql
\i api_tests/files/upload_project_files.sql
\i api_tests/files/upload_task_files.sql
\i api_tests/files/modify_avatar.sql
\i api_tests/files/delete_avatar.sql
\i api_tests/files/delete_file.sql

-- options
\i api_tests/options/create_task_status.sql

-- utilities
\i api_tests/utilities/create_water_bill.sql
\i api_tests/utilities/modify_water_bill.sql
\i api_tests/utilities/modify_energy_bill_note.sql

-- truncate tables
truncate water_bills;
