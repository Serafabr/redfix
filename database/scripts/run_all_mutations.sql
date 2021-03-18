-- asset
\i tests/asset/create_asset.sql
\i tests/asset/modify_asset.sql

\i tests/asset/create_appliance.sql
\i tests/asset/modify_appliance.sql

\i tests/asset/create_tag.sql
\i tests/asset/modify_tag.sql

\i tests/asset/add_child_to_asset.sql
\i tests/asset/remove_child_from_asset.sql

\i tests/asset/add_parent_to_asset.sql
\i tests/asset/remove_parent_from_asset.sql

\i tests/asset/add_tag_to_asset.sql
\i tests/asset/remove_tag_from_asset.sql

\i tests/asset/create_asset_note.sql
\i tests/asset/create_asset_status_event.sql

-- team
\i tests/team/change_password.sql
\i tests/team/modify_myself.sql

\i tests/team/create_person.sql
\i tests/team/modify_person.sql

\i tests/team/create_team.sql
\i tests/team/modify_team.sql

\i tests/team/add_person_to_team.sql
\i tests/team/remove_person_from_team.sql

\i tests/team/activate_person.sql
\i tests/team/deactivate_person.sql

\i tests/team/activate_team.sql
\i tests/team/deactivate_team.sql

-- firm
\i tests/firm/create_firm.sql
\i tests/firm/modify_firm.sql

-- -- project
\i tests/project/create_project.sql
\i tests/project/modify_project.sql
\i tests/project/deactivate_project.sql
\i tests/project/activate_project.sql

-- depot
\i tests/depot/create_depot.sql
\i tests/depot/modify_depot.sql

\i tests/depot/create_box.sql
\i tests/depot/modify_box.sql

\i tests/depot/create_spec.sql
\i tests/depot/modify_spec.sql

\i tests/depot/create_price.sql
\i tests/depot/modify_price.sql
\i tests/depot/delete_price.sql

\i tests/depot/create_supply.sql
\i tests/depot/modify_supply.sql

\i tests/depot/deactivate_box.sql
\i tests/depot/activate_box.sql

-- task
\i tests/task/create_task.sql
\i tests/task/modify_task.sql
\i tests/task/add_asset_to_task.sql
\i tests/task/remove_asset_from_task.sql

\i tests/task/move_task.sql
\i tests/task/send_task.sql
\i tests/task/cancel_send_task.sql
\i tests/task/receive_task.sql
\i tests/task/create_task_note.sql
\i tests/task/modify_task_note.sql
\i tests/task/delete_task_note.sql

\i tests/task/follow_task.sql
\i tests/task/unfollow_task.sql

\i tests/task/clone_task.sql

-- plans
\i tests/plan/create_plan.sql
\i tests/plan/modify_plan.sql
\i tests/plan/create_task_template.sql
\i tests/plan/modify_task_template.sql
\i tests/plan/add_asset_to_task_template.sql
\i tests/plan/remove_asset_from_task_template.sql
\i tests/plan/create_task_from_template.sql

\i tests/plan/create_monitor.sql
\i tests/plan/modify_monitor.sql
\i tests/plan/create_monitor_read.sql
\i tests/plan/modify_monitor_read.sql

-- invoices
\i tests/invoice/create_invoice.sql
\i tests/invoice/modify_invoice.sql

\i tests/invoice/create_allocation.sql
\i tests/invoice/delete_allocations.sql
\i tests/invoice/approve_allocations.sql

\i tests/invoice/add_allocations_to_invoice.sql

\i tests/invoice/set_invoice_paid.sql
\i tests/invoice/set_invoice_unpaid.sql


-- files
\i tests/files/upload_asset_files.sql
\i tests/files/upload_depot_files.sql
\i tests/files/upload_plan_files.sql
\i tests/files/upload_project_files.sql
\i tests/files/upload_task_files.sql
\i tests/files/modify_avatar.sql
\i tests/files/delete_avatar.sql
\i tests/files/delete_file.sql

-- options
\i tests/options/create_task_status.sql

-- utilities
\i tests/utilities/create_water_bill.sql
\i tests/utilities/create_energy_bill_note.sql
\i tests/utilities/modify_water_bill.sql

-- entity removals and others
delete from water_bills where true;
\i tests/project/add_task_to_project.sql
\i tests/project/remove_task_from_project.sql
\i tests/asset/delete_tag.sql
\i tests/project/delete_project.sql
\i tests/invoice/delete_invoice.sql
\i tests/depot/delete_supply.sql
