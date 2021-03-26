# Documentation: https://www.postgresql.org/docs/12/app-psql.html

psql \
--username=postgres \
--host=localhost \
--port=5432 \
--dbname=postgres \
--no-psqlrc \
--command="create role administrator with superuser createdb createrole login bypassrls password '123456'"
