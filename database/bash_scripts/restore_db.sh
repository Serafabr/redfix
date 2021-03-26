# Documentation: https://www.postgresql.org/docs/12/app-psql.html

psql \
--file=db.dump.sql \
--file=roles.dump.sql \
--dbname=template1 \
--host=localhost \
--port=5432 \
--username=administrator \
--password
