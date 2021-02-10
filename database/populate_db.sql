rollback;

set cookie.session.person_id to 1;

-- set ON_ERROR_STOP to on
\set ON_ERROR_STOP on

-- begin transaction;
begin transaction;

-- populate tables with sample data
\i samples/appliances.sql
\i samples/tags.sql

\i samples/persons.sql
\i samples/firms.sql

\i samples/projects.sql
\i samples/requests.sql

\i samples/depots.sql

\i samples/tasks.sql

-- \i samples/ceb_meters.sql
-- \if :insert_ceb_data
--   \i samples/ceb_bills.sql
-- \endif 

-- restart sequences
-- \i functions/restart_sequences.sql

-- commit transaction
commit transaction;

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off
