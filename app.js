//const { getLinks } = require ('./utils/getLinks')
const validate = require('./utils/validate')

console.log('o---o---o---o---o---o---o---o---o')
console.log('  Bienvenido a Md-Lnks   0-|--<  ')
console.log('o---o---o---o---o---o---o---o---o')

const [ , , arg3] = process.argv
validate(arg3)

