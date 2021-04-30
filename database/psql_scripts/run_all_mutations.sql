-- asset
\i api_tests/asset/create_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/modify_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/asset/create_appliance.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/modify_appliance.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/asset/create_tag.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/modify_tag.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/asset/add_child_to_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/remove_child_from_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/asset/add_parent_to_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/remove_parent_from_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/asset/add_tag_to_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/remove_tag_from_asset.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/delete_tag.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/asset/create_asset_note.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/create_asset_status_event.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/asset/create_monitor.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/modify_monitor.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/set_monitor_next_read_date.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/create_monitor_read.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/asset/modify_monitor_read.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- team
\i api_tests/team/change_password.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/team/modify_myself.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/team/create_person.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/team/modify_person.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/team/create_team.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/team/modify_team.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/team/add_person_to_team.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/team/remove_person_from_team.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/team/activate_person.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/team/deactivate_person.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/team/activate_team.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/team/deactivate_team.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- firm
\i api_tests/firm/create_firm.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/firm/modify_firm.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- depot
\i api_tests/depot/create_depot.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/depot/modify_depot.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/depot/create_supply.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/depot/modify_supply.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/depot/create_price.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/depot/modify_price.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/depot/delete_price.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/depot/deactivate_depot.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/depot/activate_depot.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- task
\i api_tests/task/create_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/modify_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/add_asset_to_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/remove_asset_from_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/task/set_task_status.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/send_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/create_task_note.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/modify_task_note.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/delete_task_note.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/task/follow_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/task/unfollow_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/task/set_task_date_limit.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/task/clone_task.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- project
\i api_tests/project/create_project.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/project/modify_project.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/project/deactivate_project.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/project/activate_project.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/project/add_task_to_project.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/project/remove_task_from_project.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/project/delete_project.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- plans
\i api_tests/plan/create_plan.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/plan/modify_plan.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/plan/create_task_template.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/plan/modify_task_template.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/plan/add_asset_to_task_template.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/plan/remove_asset_from_task_template.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/plan/create_task_from_template.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- billings
\i api_tests/billing/create_billing.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/billing/modify_billing.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/billing/create_allocation.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/billing/approve_allocations.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/billing/delete_allocations.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/billing/modify_qty_proposed.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/billing/modify_qty_approved.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/billing/add_allocations_to_billing.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif


\i api_tests/billing/toggle_billing_paid.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

\i api_tests/billing/delete_billing.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- files
\i api_tests/files/upload_asset_files.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/upload_billing_files.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/upload_depot_files.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/upload_plan_files.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/upload_project_files.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/upload_task_files.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/modify_avatar.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/delete_avatar.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/files/delete_file.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- options
\i api_tests/options/create_task_status.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- utilities
\i api_tests/utilities/create_water_bill.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/utilities/modify_water_bill.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif
\i api_tests/utilities/modify_energy_bill_note.sql \if :ERROR \set mutation_with_error :tested_mutation \q \endif

-- truncate tables
truncate water_bills;
