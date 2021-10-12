const {existsSync} = require('fs')
const {isAbsolute, resolve} = require('path')
const mdFilter = require('./utils/mdFilter')
const validateLink = require('./utils/validate')
const getLinks = require('./utils/getLinks')
const statistics = require('./utils/stats')

const mdLinks = (path, validate = false, stats = false) => {
    const absolutePath = (isAbsolute(path) ? path : resolve(path))
    return new Promise ((resolve, reject) => {
        if (absolutePath && existsSync(absolutePath)) {  //si la ruta es válida:
                let getMd = mdFilter(absolutePath)     //obtenemos los archivos md       
                let links = getLinks(getMd)            //extraemos los links
                if (getMd.length > 0){                 //si exiten achivos md
                    if (links.length == 0){            //si el archivo no contiene links
                        reject('sus arhcivos markdown no contienen links')  
                    } else if(links.length > 0) {       //si el archivo contiene links
                        if (validate == false && stats == false){  //si no se ponen opciones
                            resolve(links)
                        } else if (validate == true) {               //si se usa validate
                            if (stats == false){                     //validate true y stats false
                                let linksVal = links.map(link => {
                                    let validationPromise = validateLink(link)
                                    return validationPromise
                                })
                                resolve(Promise.all(linksVal))
                            } else if (stats == true){
                                resolve(statistics(links))
                            }
                        }
                    }          
                    
                } else {
                    reject("su ruta no cuenta con archivos markdown")  // si no existen archivos md
                }
        } else {
            reject('introduzca una ruta válida')  //si la ruta de entrada no es válida
        }
    })
   
}

module.exports = mdLinks

/* else {
    if(validate == false && stats == false){
       resolve(links)
   } else if (validate == true && stats == false){
       let validation = validateLink(getMd)
       resolve(validation)
   } 
} */ 