const validate = require('./validate')
//const chalk = require('chalk')

const validateStats = (links) => {
    let linksVal = links.map(link => {
        let validationPromise = validate(link)
        return validationPromise
    })         
    let response = Promise.all(linksVal).then(values =>{
        href = values.map((element => {
            return element.href
        }))
        const uniqueFilter = new Set(href)
        let unique = [...uniqueFilter]

        let broken = []
        values.map(link => {        
            if (link.ok === "fail"){
                broken.push(link)
            }
        })

        let response = {
            Total: values.length, 
            Unique: unique.length,
            Broken: broken.length
        }
        return response
    })
    
    return response
}

module.exports = validateStats