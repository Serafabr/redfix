# Instruções de uso

## backend

* Rodar web server em ambiente de desenvolvimento:* `npm start`

Conforme indicado no arquivo `backend/package.json`, esse comando executa o seguinte script:

`nodemon --require dotenv/config server.js`

As variáveis de ambiente devem ser definidas no arquivo `backend/.env` e serão carregadas conforme explicado em https://www.npmjs.com/package/dotenv#preload

* *Rodar web server em ambiente de produção (sistema operacional Windows):*

Seguir os passos indicados na página da biblioteca `node-windows`: https://www.npmjs.com/package/node-windows

As variáveis de ambiente devem ser definidas no arquivo `backend/windows-service.js` e serão carregadas pelo `node-windows` na criação do serviço.

## database

OBS.: Todos os comandos devem ser feitos com `database` como "current working directory"

* Primeiro passo após instalação (criação do usuário `administrator`): no bash, executar `source scripts/create_administrator.sh`

* Criar db para desenvolvimento (opção 1): no bash, executar `source scripts/create_db.sh`

* Criar db para desenvolvimento (opção 2): no psql, executar `\i create_db.sql`

* Acessar db para testes, queries etc.: no bash, executar `scripts/start_psql.sh`

* Configurações: usar arquivos do diretório `configs` e seguir a documentação do PostgreSQL

  - `.psqlrc`: https://www.postgresql.org/docs/12/app-psql.html
  - `postgresql.conf`: https://www.postgresql.org/docs/12/runtime-config.html
  - `postgresql.cmms.conf`: https://www.postgresql.org/docs/12/runtime-config.html
  - `pg_hba.conf`: https://www.postgresql.org/docs/12/auth-pg-hba-conf.html

Desenvolvido por:

* [Serafabr](https://github.com/Serafabr)
* [hzlopes](https://github.com/hzlopes)
* [mathbraga](https://github.com/mathbraga)


