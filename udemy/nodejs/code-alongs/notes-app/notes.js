const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...';
};

const addNote = function (title, body) {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const existingNote = notes.find((note) => note.title === title);

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

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = { getNotes, addNote, removeNote };
