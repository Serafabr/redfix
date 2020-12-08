Instruções de uso

* *Rodar web server em ambiente de desenvolvimento:* `npm start`

Conforme indicado no arquivo `backend/package.json`, esse comando executa o seguinte script:

`nodemon --require dotenv/config server.js`

As variáveis de ambiente devem ser definidas no arquivo `backend/.env` e serão carregadas conforme explicado em https://www.npmjs.com/package/dotenv#preload

* *Rodar web server em ambiente de produção (sistema operacional Windows):*

Seguir os passos indicados na página da biblioteca `node-windows`: https://www.npmjs.com/package/node-windows

As variáveis de ambiente devem ser definidas no arquivo `backend/windows-service.js` e serão carregadas pelo `node-windows` na criação do serviço.


* *Criar novo banco de dados:*

Dentro do psql, executar `\i database/createdb.sql`.`



Desenvolvido por:

* [Serafabr](https://github.com/Serafabr)
* [hzlopes](https://github.com/hzlopes)
* [mathbraga](https://github.com/mathbraga)
