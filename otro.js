const fs = require('fs')
const path = require('path')

const readMd = async (directory) => {
    try {
        let mdsArray = []
        fs.readdir(directory, (error, files) => {
            files.forEach(element => {
                let pathElement = path.resolve(directory, element)
                if (fs.lstatSync(pathElement).isDirectory()) {
                    readMd(pathElement)
                    return mdsArray
                } else if (path.extname(pathElement) === ".md" || path.extname(pathElement.toLocaleLowerCase()) === ".markdown" || path.extname(pathElement.toLowerCase()) === ".mdown"){
                    mdsArray.push(pathElement)
                    return mdsArray
                }
            })
        })
        return mdsArray
    } catch (error) {
        throw error
    }
}

module.exports = {
    readMd
}