\set mutation_ok 0

-- asset
\i api_test/asset/insert_asset.sql
\i api_test/asset/modify_asset.sql

\i api_test/asset/insert_tag.sql
\i api_test/asset/modify_tag.sql

\i api_test/asset/insert_asset_child.sql
\i api_test/asset/remove_asset_child.sql

\i api_test/asset/insert_asset_parent.sql
\i api_test/asset/remove_asset_parent.sql

\i api_test/asset/insert_asset_tag.sql
\i api_test/asset/remove_asset_tag.sql

\i api_test/asset/remove_tag.sql

-- team
\i api_test/team/change_password.sql
\i api_test/team/modify_self.sql

\i api_test/team/insert_person.sql
\i api_test/team/modify_person.sql

\i api_test/team/insert_team.sql
\i api_test/team/modify_team.sql

\i api_test/team/insert_team_person.sql
\i api_test/team/remove_team_person.sql

\i api_test/team/activate_person.sql
\i api_test/team/deactivate_person.sql

\i api_test/team/activate_team.sql
\i api_test/team/deactivate_team.sql

-- firm
\i api_test/firm/insert_firm.sql
\i api_test/firm/modify_firm.sql

-- -- project
\i api_test/project/insert_project.sql
\i api_test/project/modify_project.sql
\i api_test/project/deactivate_project.sql
\i api_test/project/activate_project.sql
\i api_test/project/remove_project.sql
-- \i api_test/project/add_task_to_project.sql
-- \i api_test/project/remove_task_from_project.sql

-- depot
\i api_test/depot/insert_depot.sql
\i api_test/depot/modify_depot.sql

\i api_test/depot/insert_box.sql
\i api_test/depot/modify_box.sql

\i api_test/depot/insert_supply.sql
\i api_test/depot/modify_supply.sql

\i api_test/depot/deactivate_box.sql
\i api_test/depot/activate_box.sql
\i api_test/depot/remove_supply.sql

-- task
\i api_test/task/insert_task.sql
\i api_test/task/modify_task.sql
\i api_test/task/insert_task_asset.sql
\i api_test/task/remove_task_asset.sql

\i api_test/task/move_task.sql
\i api_test/task/send_task.sql
\i api_test/task/cancel_send_task.sql
\i api_test/task/receive_task.sql
\i api_test/task/insert_task_note.sql
\i api_test/task/modify_task_note.sql
\i api_test/task/remove_task_note.sql

\i api_test/task/follow_task.sql
\i api_test/task/unfollow_task.sql

\i api_test/task/clone_task.sql
\i api_test/task/propose_task_supply.sql
\i api_test/task/approve_proposed_task_supplies.sql
\i api_test/task/approve_task_supply.sql
\i api_test/task/remove_task_supply.sql

-- \i api_test/task/finish_task.sql
-- \i api_test/task/reopen_task.sql

-- plans
-- \i samples/plans.sql

-- invoices
-- \i samples/invoices.sql
