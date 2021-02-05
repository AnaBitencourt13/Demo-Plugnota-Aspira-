'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const FormData = require('form-data')
require("dotenv/config.js")

async function certificado() {
    try {
    const url = (process.env.CERTIFICADO_URL)
    const data = new FormData();
    const path = Path.resolve(__dirname,'./documentos', 'certificado.pfx')
    data.append("arquivo", Fs.createReadStream(path));
    data.append("senha", "123mudar");
  
    const response = await Axios({
    url,
    method: 'post',
    data, 
    headers: { 
      'x-api-key' : (process.env.X_API_KEY),
        ...data.getHeaders()
    },
    })

        console.log(JSON.stringify(response.status))
        console.log(JSON.stringify(response.data))
        return response.data
    }

    catch(error){
        console.error(error)
    }
}

certificado()
