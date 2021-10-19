const { get } = require('axios')
const chalk = require('chalk')



// ------------validate -----------
 
//recibir un array de urls
//hacer una petición para recabar la siguiente información: 
//  -status: código de respuesta HTTP.
//  -ok: Mensaje "fail" en caso de fallo u "ok" en caso de éxito.


const validate = (link) => {
    let href = link.href
    return get(href)
        .then((response) => {
            link.response = chalk.green(response.status)
            link.ok = chalk.green(response.statusText)
            return link
        }).catch((err) => {
            link.response = chalk.bgRed(err.response.status)
            link.ok = chalk.bgRed("fail")
            return link
        })
  }

module.exports = validate