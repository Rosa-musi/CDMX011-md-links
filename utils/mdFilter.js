const fs = require('fs')
const {extname, join, isAbsolute, resolve} = require('path')

//saber si lo que esta leyendo es un archivo un un directorio.
//si es un archivo validar si es md y meterlo a un array de rutas
//si es un directorio volver a aplicar la funcióin (recursividad)


const readMd = (path) => {
    if (fs.lstatSync(path).isDirectory()) {
        const filesDir =  fs.readdirSync(path)  //reduce nos devuelve un valor único, en lugar de definir una variable podemos poner un return
        return filesDir.reduce((acc, currentPath) => {   //acc es un acumulador, currenPath es el elemento actual
            const newPaths = readMd(join(path, currentPath)) //aquí estoy recuperando los md que me devuelve mi función readMd
            return acc.concat(newPaths)  //aquí estoy concatenando mis rutas de archivos md de cada vuelta que de usando la recursividad
        }, [])  //este array vacío es un valor inicial, si yo no se lo pongo toma en valor inicial de mi arreglo y la iteración comienza en valor 1, no en el 0
    } else {
        if (extname(path) === ".md" || extname(path.toLocaleLowerCase()) === ".markdown" || extname(path.toLowerCase()) === ".mdown"){
            return [path]
        } else {
            return []
        }
    }
}




//----------función para validar los liks y obtener información -------------

//Tengo un array de direcciones
//Crear una promesa
//Validar si estoy usando el parámetro stats, validate o los dos.
//si tengo parámetro validar, validar los links y retornar la información.
//si tengo parámetro stats mandar las estadísticas.
//si tengo ambos parámetros mandar las estadísticas con los links funcionales.
//si no tengo parámetros sólo regresar la direccion

module.exports = {
    readMd
}