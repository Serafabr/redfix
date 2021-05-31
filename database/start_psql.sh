#!/bin/bash

psql \
--username=administrator \
--host=localhost \
--port=5432 \
--dbname=dev \
--no-password
