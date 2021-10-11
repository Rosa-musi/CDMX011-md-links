//-------------flags---------------
//--validate
//--stats

const argv = require('yargs')
                .option('val', {  //abrebiación del argumento
                   alias: 'validate',  //nombre del argumento
                   type: 'boolean',  //tipo de dato
                   describe: 'valida si los links funcionan', //describe para que sirve el argumento cuando se llama el comando de --help
                   demandOption: false, //para especificar que este argumento es necesario
                   default: false
                })    
                .check( (argv, options) => {  //check es para hacer una validación con los datos que ya tenemos de option
                    if (isNaN( argv.b )){
                        throw 'estadísticas de los '
                    }
                    return true        //si no hay ningún error hay que hacer un return del true o no funciona
                }) 
                .option('st', {
                    alias: 'stats',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'estadísticas de los links encontrados'

                })
                .argv

module.exports = argv