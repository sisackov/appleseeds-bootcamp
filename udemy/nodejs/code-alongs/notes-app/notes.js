const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const existingNote = notes.find((note) => note.title === title);

    debugger;
    /**
     * to inspect the code we need to run: node inspect app.js ...
     * then, in Chrome, go to chrome://inspect
     * Under Remote Target the app.js should appear.
     * if not, configure the discover network targets to include:
     * -    localhost:9229
     * -    127.0.0.1:9229
     *
     *
     * to rerun the program from the debug console we can run: restart
     * to close the debug console run: .exit
     */

    if (!existingNote) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const listNotes = () => {
    console.log(chalk.green.inverse('Your notes'));
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(chalk.blue.italic(note.title));
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log(chalk.magenta.inverse(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
