-- asset
\i tests/asset/insert_asset.sql
\i tests/asset/modify_asset.sql

\i tests/asset/insert_tag.sql
\i tests/asset/modify_tag.sql

\i tests/asset/insert_asset_child.sql
\i tests/asset/remove_asset_child.sql

\i tests/asset/insert_asset_parent.sql
\i tests/asset/remove_asset_parent.sql

\i tests/asset/insert_asset_tag.sql
\i tests/asset/remove_asset_tag.sql

-- spec
\i tests/spec/insert_spec.sql
\i tests/spec/insert_spec_version.sql
\i tests/spec/modify_spec_version.sql
\i tests/spec/insert_price.sql
\i tests/spec/modify_price.sql
\i tests/spec/remove_price.sql

-- team
\i tests/team/change_password.sql
\i tests/team/modify_self.sql

\i tests/team/insert_person.sql
\i tests/team/modify_person.sql

\i tests/team/insert_team.sql
\i tests/team/modify_team.sql

\i tests/team/insert_team_person.sql
\i tests/team/remove_team_person.sql

\i tests/team/activate_person.sql
\i tests/team/deactivate_person.sql

\i tests/team/activate_team.sql
\i tests/team/deactivate_team.sql

-- firm
\i tests/firm/insert_firm.sql
\i tests/firm/modify_firm.sql

-- -- project
\i tests/project/insert_project.sql
\i tests/project/modify_project.sql
\i tests/project/deactivate_project.sql
\i tests/project/activate_project.sql

-- depot
\i tests/depot/insert_depot.sql
\i tests/depot/modify_depot.sql

\i tests/depot/insert_box.sql
\i tests/depot/modify_box.sql

\i tests/depot/insert_supply.sql
\i tests/depot/modify_supply.sql

\i tests/depot/deactivate_box.sql
\i tests/depot/activate_box.sql

-- task
\i tests/task/insert_task.sql
\i tests/task/modify_task.sql
\i tests/task/insert_task_asset.sql
\i tests/task/remove_task_asset.sql

\i tests/task/move_task.sql
\i tests/task/send_task.sql
\i tests/task/cancel_send_task.sql
\i tests/task/receive_task.sql
\i tests/task/insert_task_note.sql
\i tests/task/modify_task_note.sql
\i tests/task/remove_task_note.sql

\i tests/task/follow_task.sql
\i tests/task/unfollow_task.sql

\i tests/task/clone_task.sql
\i tests/task/propose_task_supply.sql
\i tests/task/approve_proposed_task_supplies.sql
\i tests/task/approve_task_supply.sql
\i tests/task/remove_task_supply.sql

-- \i tests/task/finish_task.sql
-- \i tests/task/reopen_task.sql

-- plans
\i tests/plan/insert_plan.sql
\i tests/plan/modify_plan.sql
\i tests/plan/insert_task_template.sql
\i tests/plan/generate_plan_task.sql
\i tests/plan/generate_plan_tasks.sql

\i tests/plan/insert_monitor.sql
\i tests/plan/modify_monitor.sql
\i tests/plan/insert_monitor_read.sql
\i tests/plan/modify_monitor_read.sql

-- invoices
\i tests/invoice/insert_invoice.sql
\i tests/invoice/modify_invoice.sql

\i tests/invoice/bind_tasks_to_invoice.sql
\i tests/invoice/insert_invoice_tasks.sql
\i tests/invoice/set_invoice_paid.sql
\i tests/invoice/set_invoice_unpaid.sql

\i tests/invoice/remove_invoice_task.sql

-- files
\i tests/files/insert_asset_files.sql
\i tests/files/insert_depot_files.sql
\i tests/files/insert_plan_files.sql
\i tests/files/insert_project_files.sql
\i tests/files/insert_spec_files.sql
\i tests/files/insert_task_files.sql
\i tests/files/modify_avatar.sql
\i tests/files/remove_avatar.sql
\i tests/files/remove_file.sql

-- options
\i tests/options/insert_task_status.sql

-- utilities
\i tests/utilities/insert_caesb_bill.sql
\i tests/utilities/insert_ceb_bill_note.sql
\i tests/utilities/modify_caesb_bill.sql

-- entity removals and others
delete from specs where spec_id >= 10001;
delete from caesb_bills where true;
\i tests/project/add_task_to_project.sql
\i tests/project/remove_task_from_project.sql
\i tests/asset/remove_tag.sql
\i tests/project/remove_project.sql
\i tests/invoice/remove_invoice.sql
\i tests/depot/remove_supply.sql

