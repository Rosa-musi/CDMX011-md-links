const {existsSync} = require('fs')
const {isAbsolute, resolve} = require('path')
const mdFilter = require('./mdFilter')
const validateLink = require('./validate')
const getLinks = require('./getLinks')
const statistics = require('./stats')
const statsValidate = require('./StatsValidate')
const pathResolve = resolve
var emoji = require('node-emoji')

const mdLinks = (path, validate = false, stats = false) => {  
    return new Promise ((resolve, reject) => {
        if (path) {
            const absolutePath = (isAbsolute(path) ? path : pathResolve(path))
            if (absolutePath && existsSync(absolutePath)) {  //si la ruta es válida:
                let getMd = mdFilter(absolutePath)     //obtenemos los archivos md       
                let links = getLinks(getMd)            //extraemos los links
                if (getMd.length > 0){                 //si exiten achivos md
                    if (links.length == 0){            //si el archivo no contiene links
                        reject(emoji.emojify('sus arhcivos markdown no contienen links :woman-shrugging:'))  
                    } else if(links.length > 0) {       //si el archivo contiene links
                        if (validate == false && stats == false){  //si no se ponen opciones
                            resolve(links)
                        } else if (validate == true) {               //si se usa validate
                            if (stats == false){   
                                let linksVal = links.map(link => {
                                    let validationPromise = validateLink(link)
                                    return validationPromise
                                })                  
                                let validatedLinks = Promise.all(linksVal)
                                resolve(validatedLinks)
                            }  if(stats === true){
                                resolve(statsValidate(links))
                            }
                        } else if (stats == true){
                            if (validate == false){
                                resolve(statistics(links))
                            }
                        }
                    }           
                } else {
                    reject(emoji.emojify("Su ruta no cuenta con archivos markdown :woman-shrugging: :clipboard:"))  // si no existen archivos md
                }
            } else {
                reject(emoji.emojify('Introduzca una ruta válida por favor :pushpin:'))  //si la ruta de entrada no es válida
            }
        } else {
            resolve(emoji.emojify('Introduzca una ruta por favor :woman-pouting: :pushpin:'))
        }
    })
}

module.exports = mdLinks
