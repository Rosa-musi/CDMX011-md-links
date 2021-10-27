const { readFileSync } = require('fs')
const marked = require('marked');
const cheerio = require('cheerio')



const getLinks = (paths) => {
    let links = []  
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
        })
    })
    return links
} 

module.exports = getLinks