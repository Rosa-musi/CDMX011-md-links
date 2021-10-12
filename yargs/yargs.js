//-------------flags---------------
//--validate
//--stats

const argv = require('yargs')
                .option('v', {  //abrebiación del argumento
                   alias: 'validate',  //nombre del argusmento
                   type: 'boolean',  //tipo de dato
                   describe: 'valida si los links funcionan', //describe para que sirve el argumento cuando se llama el comando de --help
                   default: false,
                   demandOption: false, //para especificar que este argumento es necesario
                }) 
                .option('s', {
                    alias: 'stats',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'estadísticas de los links encontrados'

                })
                .argv

module.exports = argv