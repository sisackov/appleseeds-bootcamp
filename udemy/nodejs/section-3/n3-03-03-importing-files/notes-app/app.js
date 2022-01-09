//runs the code in the required file before the code in the current file
//because the required block is written before(above) the current block.
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);
