const { get } = require('axios')



// ------------validate -----------
 
//recibir un array de urls
//hacer una petición para recabar la siguiente información: 
//  -status: código de respuesta HTTP.
//  -ok: Mensaje "fail" en caso de fallo u "ok" en caso de éxito.


const validate = (link) => {
    let href = link.href
    return get(href)
        .then((response) => {
            link.response = response.status
            link.ok = response.statusText
            return link
        }).catch((err) => {
            link.response = err.response.status
            link.ok = "fail"
            return link
            //link.response = err.status
            //link.ok = err.statusText
            //console.log(err)
        })
  }

module.exports = validate