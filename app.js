const mymodule = require('./index.js')
//const { readMd } = require('./otro.js')
const { readMd } = require('./unoMas.js')

console.log('o---o---o---o---o---o---o---o---o')
console.log('  Bienvenido a Md-Lnks   0-|--<  ')
console.log('o---o---o---o---o---o---o---o---o')

/* mymodule("./Directorio", function(err, files){
    if (err){
        console.log(err)
    } else {
        files.forEach(function(fileName){
            console.log(fileName)
        })
    }
})  */ 

/* mymodule("./Directorio")
    .then( files => console.log(files))
    .catch( err => console.log(err))  */

console.log(readMd("./Directorio"))


