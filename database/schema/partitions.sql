-- persons
-- partition by list (is_active);
create table old_persons partition of persons for values in (false);
create table active_persons partition of persons for values in (true);

-- assets
-- partition by list (asset_category_id);
create table devices partition of assets default;
create table sites partition of assets for values in (:'asset_category_facility'::integer);

-- depots
-- partition by list (is_active);
create table old_depots partition of depots for values in (false);
create table active_depots partition of depots for values in (true);

-- boxes
-- partition by list (is_active);
create table old_boxes partition of boxes for values in (false);
create table active_boxes partition of boxes for values in (true);

-- teams
-- partition by list (is_active);
create table old_teams partition of teams for values in (false);
create table active_teams partition of teams for values in (true);

-- projects
-- partition by list (is_active);
create table old_projects partition of projects for values in (false);
create table active_projects partition of projects for values in (true);


-- a decidir:
-- tasks old x new ( e templates?)
-- plans active x inactive ----> depots já possuem essa diferenciação
-- task_templates active x inactive --> idem
-- prices active x inactive --> desnecessário para essa tabela
