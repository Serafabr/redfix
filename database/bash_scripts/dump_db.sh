#!/bin/bash

# pg_dump docs:    https://www.postgresql.org/docs/12/app-pgdump.html
# pg_dumpall docs: https://www.postgresql.org/docs/12/app-pg-dumpall.html

# Dumps the database
pg_dump \
--create \
--clean \
--if-exists \
--dbname=dev \
--encoding=utf8 \
--file=db.dump.sql \
--host=localhost \
--port=5432 \
--username=administrator \
--no-psqlrc \
--no-password

# Dumps all roles in the cluster
pg_dumpall \
--clean \
--if-exists \
--roles-only \
--database=dev \
--encoding=utf8 \
--file=roles.dump.sql \
--host=localhost \
--port=5432 \
--username=administrator \
--no-psqlrc \
--no-password
