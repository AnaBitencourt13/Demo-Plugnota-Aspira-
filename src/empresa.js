const axios = require('axios');
const data = require('./arquivos/dadosEmpresa.js.js');
require("dotenv/config.js")

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