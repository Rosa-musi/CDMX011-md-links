//const { getLinks } = require ('./utils/getLinks')
// const validate = require('./utils/validate')
const mdLinks = require('./index')
const argv = require('./yargs/yargs')


console.log('o---o---o---o---o---o---o---o---o')
console.log('  Bienvenido a Md-Lnks   0-|--<  ')
console.log('o---o---o---o---o---o---o---o---o')

const [ , , arg3] = process.argv


mdLinks(arg3, argv.v, argv.s)
    .then(arch => console.log(arch))
    .catch(err => console.log(err))
//console.log(argv)
//console.log(process.argv)





