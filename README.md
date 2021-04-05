# hospitalmaidana

 <h2> Guia para fazer o deploy </h2>
  <h3> Requisitos: </h3>
   - Ter node js na última versão instalado na sua máquina </br>
   - Ter postgresql (acima da versão 5.6) instalado  </br>
   - Recomendável ( mas não obrigatório) docker e docker-compose  </br>
  <h3> Pré configurações: </h3>
   - Acesse o knexfile.js e coloque os dados da sua conexão com o banco e do postgres.
   <h3> Comandos para executar </h3>
   <h4> Uma vez na pasta do projeto, é necessário executar os comando abaixo <b>necessariamente nessa ordem</b> </h4>
    - Para instalar todas as bibliotecas execute : npm install --save </br>
    - Depois é necessário rodar as migrations numa ordem correta, com os seguintes comando : </br>
             </br>   - knex migrate:up 20210326224714_paciente.js
             </br>   - knex migrate:up 20210326224942_medicos.js 
             </br>   - knex migrate:latest
    </br> - <strong> Opcionalmente pode rodar as seeds para preencher o banco incialmente</strong> : </br>
        - knex seed:run </br>
        
   -<strong>Por fim  para iniciar o servidor na porta 3030 :</strong> </br>
    <b> - npm start </b>
