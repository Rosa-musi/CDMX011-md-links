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
    let absolutePath = (isAbsolute(path) ? path : resolve(path))
    let paths = readMd(absolutePath)
    let links = []
    //console.log(absolutePath)
    paths.forEach((element) => {
        let file = readFileSync(element, 'utf-8')
        let html = marked(file)
        const $ = cheerio.load(html)
        let baseLink = element
        $('a').each((index, element) => {
            let href = $(element).attr('href')
            let text = $(element).text()
            let link = baseLink
            links.push({href: href, text: text, file: link})
            //console.log(links)
        })
        //console.log(links)
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