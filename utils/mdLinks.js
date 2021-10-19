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
            if (absolutePath && existsSync(absolutePath)) {  
                let getMd = mdFilter(absolutePath)         
                let links = getLinks(getMd)            
                if (getMd.length > 0){                 
                    if (links.length == 0){            
                        reject(emoji.emojify('your files don not contain links :woman-shrugging:'))  
                    } else if(links.length > 0) {       
                        if (validate == false && stats == false){  
                            resolve(links)
                        } else if (validate == true) {               
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
                    reject(emoji.emojify("Your path does not contain markdown files :woman-shrugging: :clipboard:"))  
                }
            } else {
                reject(emoji.emojify('Please enter a valid path :pushpin:'))
            }
        } else {
            resolve(emoji.emojify('Enter a path please :woman-pouting: :pushpin:'))
        }
    })
}

module.exports = mdLinks
