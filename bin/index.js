#!/usr/bin/env node

const mdLinks = require('../utils/mdLinks')
const argv = require('../yargs/yargs')
const figlet = require('figlet')
const chalk = require('chalk')

console.log(
    chalk.cyanBright.bold(
        figlet.textSync('Md Links', {
            font: 'Train',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: false
        })
    )
)

console.log(' ')
console.log(chalk.hex('#FF3E18')('                                              0-|--< '))
console.log(' ')

const [ , , arg3] = process.argv

mdLinks(arg3, argv.v, argv.s)
    .then(arch => {
         if (typeof arch === 'object' && arch !== null) {
            if (Array.isArray(arch)) {
                arch.forEach(element => {
                    Object.entries(element).forEach(([key, value]) => {
                        console.log(chalk.cyanBright(key), value === "fail" ? chalk.bgRed(value) : value)
                    })
                    console.log('')
                }) 
            } else {
                Object.entries(arch).forEach(([key, value]) => {
                    console.log(chalk.cyanBright(key), chalk.whiteBright(value))
                })
            }
        } else (console.log(chalk.red('---------------->'), arch)) 
    })
    .catch(err => console.log(chalk.red('---------------->'), err))
