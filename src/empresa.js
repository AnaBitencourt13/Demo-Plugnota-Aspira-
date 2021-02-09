const axios = require('axios');
const data = require('./arquivos/dadosEmpresa.js.js');
require("dotenv/config.js")


//TODO: Externalizar o config
//TODO: Colocar o conteudo em uma função
//TODO: Simplificar o data: data
//TODO: Usar async/await ao invés de promises
//TODO: Adicionar prettier + eslint
//TODO: Adicionar env de exemplo

const config = {
  method: 'post',
  url: (process.env.EMPRESA_URL),
  headers: { 
    'x-api-key': (process.env.X_API_KEY) , 
    'Content-Type' : 'application/json'
  },
  data:data
};

    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});