'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
require("dotenv/config.js")

async function pdfDownload() {
        const url = (process.env.PDF_URL)
        const path = Path.resolve(__dirname,'arquivos', 'aspira.pdf')

        const writer = Fs.createWriteStream(path)

        const response = await Axios({
            url,
            method: 'get',
            headers: { 
              'x-api-key' : (process.env.X_API_KEY),
            }, 
            responseType:'stream'
        })

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
         });
}

pdfDownload()