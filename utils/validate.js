const { getLinks } = require ('./getLinks')
const { get } = require('axios')


// ------------validate -----------
 
//recibir un array de urls
//hacer una petición para recabar la siguiente información: 
//  -status: código de respuesta HTTP.
//  -ok: Mensaje "fail" en caso de fallo u "ok" en caso de éxito.


const validate = (path) => {
    let links = getLinks(path)
    links.map((element => {
        get(element.href)
            .then(response => {
                element.response = response.status
                element.ok = "ok"
                console.log(response)
                return console.log(element)
            })
            .catch(error => {
                element.response = error.response.status
                element.ok = "fail"
                return console.log(element)
            })
    }))
}

module.exports = validate