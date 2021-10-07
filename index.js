const fs = require('fs')
const {extname, join} = require('path')

//saber si lo que esta leyendo es un archivo un un directorio.
//si es un archivo validar si es md y meterlo a un array de rutas
//si es un directorio volver a aplicar la funcióin (recursividad)

const readMd = (path) => {
        if (fs.lstatSync(path).isDirectory()) {
            const filesDir =  fs.readdirSync(path)
            return filesDir.reduce((acc, currentPath) => {
                const newPaths = readMd(join(path, currentPath))
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

//función que extaiga los liks

//función para validar los liks y obtener información 


module.exports = {
    readMd
}