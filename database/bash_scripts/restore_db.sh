#!/bin/bash

psql \
--file=db.dump.sql \
--file=roles.dump.sql \
--dbname=template1 \
--host=localhost \
--port=5432 \
--username=administrator \
--no-psqlrc \
--no-password
