const mymodule = require('./index.js')

console.log('o---o---o---o---o---o---o---o---o')
console.log('  Bienvenido a Md-Lnks   0-|--<  ')
console.log('o---o---o---o---o---o---o---o---o')

mymodule("./Directorio", function(err, files){
    if (err){
        console.log(err)
    } else {
        files.forEach(function(fileName){
            console.log(fileName)
        })
    }
})