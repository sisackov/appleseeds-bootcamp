const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.inverse.magenta.bold('Success!');
console.log(greenMsg);
