const { readMd } = require ('./mdFilter.js')
const { readFileSync } = require('fs')
const marked = require('marked');
const {isAbsolute, resolve} = require('path')

//--------------función para extraer los links-------------


//leer los documentos del array de paths
//convertir el archivo a HTML
//extraer los links con chereeo o con custom render.
//crear un array de links.

const getLinks = (path) => {
    let absolutePath = (isAbsolute(path) ? path : resolve(path))
    let paths = readMd(absolutePath)
    console.log(absolutePath)
    paths.forEach(element => {
        file = readFileSync(element, 'utf-8')
        console.log(file)
    })
} 

module.exports = {
    getLinks
}