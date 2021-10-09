//-------------flags---------------
//--validate
//--stats

const argv = require('yargs')
                .option('b', {  //abrebiación del argumento
                   alias: 'base',  //nombre del argumento
                   type: 'number',  //tipo de dato
                   describe: 'Es la base de la tabla de multiplicar?', //describe para que sirve el argumento cuando se llama el comando de --help
                   demandOption: true //para especificar que este argumento es necesario
                })    
                .check( (argv, options) => {  //check es para hacer una validación con los datos que ya tenemos de option
                    if (isNaN( argv.b )){
                        throw 'La base debe ser un número'
                    }
                    return true        //si no hay ningún error hay que hacer un return del true o no funciona
                }) 
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Con este argumento se muestra la tabla de multiplicar en consola'

                })
                .argv

module.exports = argv