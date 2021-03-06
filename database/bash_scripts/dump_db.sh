#!/bin/bash

# Dumps the database
pg_dump \
--create \
--clean \
--if-exists \
--quote-all-identifiers \
--serializable-deferrable \
--encoding=utf8 \
--file=db.dump.sql \
--dbname=dev \
--host=localhost \
--port=5432 \
--username=administrator \
--no-password

# Dumps all roles in the cluster
pg_dumpall \
--clean \
--if-exists \
--quote-all-identifiers \
--roles-only \
--encoding=utf8 \
--file=roles.dump.sql \
--database=dev \
--host=localhost \
--port=5432 \
--username=administrator \
--no-password
