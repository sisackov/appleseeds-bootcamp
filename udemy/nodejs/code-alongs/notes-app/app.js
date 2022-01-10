const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

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
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    },
});
//node app.js add --title='this is my title' --body='this is my body'

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    },
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes');
    },
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    },
});

yargs.parse();
// console.log(yargs.argv); //calling this before defining commands will show no options.