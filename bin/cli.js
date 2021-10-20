#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const { program } = require('commander');
const { mdLinks } = require('../src/index');

program.version('0.0.1');

console.log(chalk.blueBright(figlet.textSync('MD-LINKS', {
  font: 'jazmine',
  horizontalLayout: 'default',
  verticalLayout: 'default',
})));

program
  .option('-val, --validate', 'Validate the status of the links in Markdown files')
  .option('-st, --stats', 'Get basic statistics about the links');

program.parse(process.argv);
const options = program.opts();
const args = process.argv.slice(2);

if (args.length === 1) {
  mdLinks(args[0], { validate: false, stats: false })
    /* .then(res => {
        console.log('\n', chalk.underline.bgCyan.bold('The links in your Markdown files are:'));
        console.table(res)}) */
    .then((res) => {
      console.log('\n', chalk.underline.bgCyan.bold('The links in your Markdown files are:'));
      res.map((object) => console.log('\n', chalk.magentaBright(object.file), chalk.yellow(object.href), chalk.blueBright(object.text)));
    })
    .catch((err) => console.error(err));
}

if (args.length === 2) {
  if (options.validate) {
    mdLinks(args[0], { validate: true, stats: false })
    // .then(res => console.table(res))
      .then((res) => {
        console.log('\n', chalk.underline.bgCyan.bold('The links validated in your Markdown files are:'));
        res.map((object) => console.log('\n', chalk.magentaBright(object.file), chalk.yellow(object.href), chalk.redBright(object.status), chalk.white(object.message), chalk.blue(object.text)));
      })
      .catch((err) => console.error(err));
  } else if (options.stats) {
    mdLinks(args[0], { validate: false, stats: true })
      .then((res) => console.log(`\nTotal: ${chalk.magentaBright(res.Total)} \nUnique: ${chalk.cyanBright(res.Unique)}`))
      .catch((err) => console.error(err));
  }
}

if (args.length === 3) {
  if (options.validate && options.stats) {
    mdLinks(args[0], { validate: true, stats: true })
      .then((res) => console.log(`\nTotal: ${chalk.magentaBright(res.Total)} \nUnique: ${chalk.cyanBright(res.Unique)} \nBroken:${chalk.redBright(res.Broken)}`))
      .catch((err) => console.error(err));
  }
}
