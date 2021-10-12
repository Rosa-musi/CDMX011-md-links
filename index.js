const {existsSync} = require('fs')
const {isAbsolute, resolve} = require('path')
const mdFilter = require('./utils/mdFilter')
const validateLink = require('./utils/validate')
const getLinks = require('./utils/getLinks')

const mdLinks = (path, validate = false, stats = false) => {
    const absolutePath = (isAbsolute(path) ? path : resolve(path))
    return new Promise ((resolve, reject) => {
        if (absolutePath && existsSync(absolutePath)) {  //si la ruta es válida:
                let getMd = mdFilter(absolutePath)     //obtenemos los archivos md       
                let links = getLinks(getMd)            //extraemos los links
                if (getMd.length > 0){                 //si exiten achivos md
                    if (links.length == 0){
                        reject('sus arhcivos markdown no contienen links')  //si el archivo no contiene links
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