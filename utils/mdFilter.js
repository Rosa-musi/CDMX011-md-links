const fs = require('fs')
const { extname, join } = require('path')

const mdFilter = (path) => {
    if (fs.lstatSync(path).isDirectory()) {
        const filesDir =  fs.readdirSync(path)  
        return filesDir.reduce((acc, currentPath) => {  
            const newPaths = mdFilter(join(path, currentPath)) 
            return acc.concat(newPaths)  
        }, [])  
    } else {
        if (extname(path) === ".md" || extname(path.toLocaleLowerCase()) === ".markdown" || extname(path.toLowerCase()) === ".mdown"){
            return [path]
        } else {
            return []
        }
    }
}

module.exports = mdFilter