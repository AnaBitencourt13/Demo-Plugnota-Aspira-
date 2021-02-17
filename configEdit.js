/* eslint-disable no-undef */
require('dotenv').config()

const env = process.env

module. exports = {
    certificado: {
        url: env.CERTIFICADO_URL,
        x_api_key: env.X_API_KEY
    },

    empresa: {
        url: env.EMPRESA_URL,
        x_api_key: env.X_API_KEY   
    },

    envio_nfse: {
        url: env.NFSE_URL,
        x_api_key: env.X_API_KEY
    },

    pdf: {
        url: env.PDF_URL,
        x_api_key: env.X_API_KEY
    },

    xml: {
        url: env.XML_URL,
        x_api_key: env.X_API_KEY
    }

};