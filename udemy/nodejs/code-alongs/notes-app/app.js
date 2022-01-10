const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// console.log(yargs.argv);
//cmd line-> node app.js add --title='this is my title'

//node app.js --help -> shows all the options

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //means that this is a required argument
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true, //means that this is a required argument
            type: 'string',
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});
//node app.js add --title='this is my title' --body='this is my body'

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes();
    },
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.parse();
// console.log(yargs.argv); //calling this before defining commands will show no options.
