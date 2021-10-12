const getLinks = require ('./getLinks')
const { get } = require('axios')
const { data } = require('cheerio/lib/api/attributes')


// ------------validate -----------
 
//recibir un array de urls
//hacer una petición para recabar la siguiente información: 
//  -status: código de respuesta HTTP.
//  -ok: Mensaje "fail" en caso de fallo u "ok" en caso de éxito.


/* const validate = (links) => {
    let promesa = links.forEach((element => {
        get(element.href)
             .then(response => {
                element.response = response.status
                element.ok = "ok"
                information.push(response)
            })
            .catch(error => {
                element.response = error.response.status
                element.ok = "fail"
                information.push(response)
            }) 
    }))
    Promise.all(promesa)
        .then( files => {
            files.forEach(file => {
                console.log(file)
            })
        }).catch ( errFile => {
            errFile.forEach(file => {
                console.log(file)
            })
        })
} */

/* const validate = (links) => {
  return links.map(link => {
        let href = link.href
        get(href)
        .then((response) => {
            link.response = response.status
            link.ok = response.statusText
            return link
        }).catch((err) => {
            link.response = err.response.status
            link.ok = err.response.statusText
            return link
            //link.response = err.status
            //link.ok = err.statusText
            //console.log(err)
        })
    })
    
} */

const validate = (link) => {
    let href = link.href
    return get(href)
        .then((response) => {
            link.response = response.status
            link.ok = response.statusText
            return link
        }).catch((err) => {
            link.response = err.response.status
            link.ok = err.response.statusText
            return link
            //link.response = err.status
            //link.ok = err.statusText
            //console.log(err)
        })
  }

module.exports = validate