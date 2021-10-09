const { readMd } = require ('./mdFilter.js')
const { readFileSync } = require('fs')
const marked = require('marked');
const {isAbsolute, resolve} = require('path')
const cheerio = require('cheerio')


//--------------función para extraer los links-------------


//leer los documentos del array de paths
//convertir el archivo a HTML
//poner links en mis archivo md para hacer pruebas
//extraer los links con chereeo o con custom render.
//crear un array de links.

const getLinks = (path) => {
    let absolutePath = (isAbsolute(path) ? path : resolve(path)) //haciendo la ruta absoluta
    let paths = readMd(absolutePath)  //obteniendo las rutas de los archivos md con la anterior función
    let links = []  //array para recolectar la información de los links obtenidos
    paths.forEach((element) => {
        let file = readFileSync(element, 'utf-8') //lectura de archivos md
        let html = marked(file)                   //conversión de archivos md a html con marked
        const $ = cheerio.load(html)              //cargar archivo html a cheerio para el scraping
        let baseLink = element                    //variable con el link dónde está el archivo para crear el objeto el link
        $('a').each((index, element) => {         //iterar por cada <a> encontrado en mi html 
            let href = $(element).attr('href')    //crando variables para los datos que necesito del <a>
            let text = $(element).text()
            let link = baseLink
            links.push({href: href, text: text, file: link})  //creando objeto para hacer push en mi array de links
        })
    })
    return links
} 

module.exports = {
    getLinks
}

/* Both fs.readFile() and fs.readFileSync() read the full content of the file in memory before returning the data.

This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

In this case, a better option is to read the file content using streams. */

//Warning: 🚨 Marked does not sanitize the output HTML. Please use a sanitize library, like DOMPurify (recommended), sanitize-html or insane on the output HTML! 🚨