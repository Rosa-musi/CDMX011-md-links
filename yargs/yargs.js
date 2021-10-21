const argv = require('yargs')
                .option('v', {  
                   alias: 'validate',  
                   type: 'boolean',  
                   describe: 'let you know if links work', 
                   default: false,
                   demandOption: false, 
                }) 
                .option('s', {
                    alias: 'stats',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: "show you link's statistics"

                })
                .argv

module.exports = argv