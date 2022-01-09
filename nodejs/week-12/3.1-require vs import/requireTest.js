const { readdirSync } = require('fs');
const path = require('path');

console.log(readdirSync(path.resolve('./', '../'))); //string array of all files in the parent directory

console.log(__dirname); //outputs the directory of the current file
console.log(__filename); //outputs the current file name
