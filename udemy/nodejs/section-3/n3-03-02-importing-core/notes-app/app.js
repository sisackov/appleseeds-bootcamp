// require imports the module and returns the module object.
// convention is to use the module name as the variable name.
// this is similar to import fs from 'fs';
const fs = require('fs');

// if file does not exist - creates it and writes to it.
// if file exists - overwrites it.
fs.writeFileSync('notes.txt', 'My name is Stas.\n');

fs.appendFileSync('notes.txt', 'I live in Beer Sheba.');
