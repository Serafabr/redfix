# Instruções de uso

## backend

* Rodar web server em ambiente de desenvolvimento: `npm start`

## database

* Criação do banco de dados em ambiente de desenvolvimento:

  1. Criação do usuário `administrator`: `source scripts/create_administrator.sh`
  2. Abrir o `psql` com o usuário `administrator` (ver comando em `bash_scripts/start_psql.sh`)
  3. Executar `\i create_db.sql`
