const accountSID = ''
const authToken = ''

const client = require('twilio')(accountSID, authToken)

// CODIGO PARA OBTER AS DEPENDENCIAS DO NOVO PROJETO

async function getDependences() {
        const data = await client.request({
            method: 'GET',
            uri: 'https://flex-api.twilio.com/v1/Configuration',
        })
        console.log(data.body.attributes)
    }
    getDependences()

// PARA USAR NO TERMINAL PARA ATUALIZAR O TEMPO PARA ESTA CONTA (DASA_PILOTO_SUL_FLEX)
// para usar em outra, rodar o código acima e preencher as 
//dependencias de forma adequada, conforme conta nova conta

// curl https://flex-api.twilio.com/v1/Configuration -X POST -u AC...7:numerodoaquitoken \
//     -H 'Content-Type: application/json' \
//     -d '{
//         "account_sid": "AC....",
//         "attributes": {
//           "plugin_flexi_wrapup": {
//             "mode": "auto",
//             "timeLimit": 5
//           },
//           "seenOnboarding": true,
//         }
//     }'

// LIMPO (IGUAL DO BITBUCKET)
// curl https://flex-api.twilio.com/v1/Configuration -X POST -u ACxx:auth_token \
//     -H 'Content-Type: application/json' \
//     -d '{
//         "account_sid": "ACxx",
//         "attributes": {
//           "plugin_flexi_wrapup": {
//             "mode": "auto",
//             "timeLimit": 120
//           }
//         }
//     }'