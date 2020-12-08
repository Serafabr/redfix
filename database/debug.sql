-- check connections
select * from pg_stat_activity where datname = 'db_dev';

-- command line to execute test.sql file on dbname database
psql -d dbname -f test.sql

-- other commands to help debugging:
