const validate = require('./validate')
const chalk = require('chalk')
//Crear una función que muestre:
//total de links
//Links únicos
//links rotos



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
            if (link.response >= 400 && link.response <= 500){
                broken.push(link)
            }
        })

        let response = {
            Total: values.length, 
            Unique: unique.length,
            Broken: chalk.redBright(broken.length)
        }

        return response
    })
    
    return response
}

module.exports = validateStats