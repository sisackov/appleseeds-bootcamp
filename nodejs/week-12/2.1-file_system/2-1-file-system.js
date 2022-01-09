const fs = require('fs');

// fs.writeFileSync('text.txt', 'My name is Stas.\n');

// fs.copyFileSync('text.txt', 'textCopy.txt');

// fs.renameSync('textCopy.txt', 'textRename.txt');

// fs.readdirSync('./').forEach((file) => {
//     console.log(file);
// });

const fileExistsSync = (filePath) => {
    const dir = filePath.slice(0, filePath.lastIndexOf('/') + 1);
    const file = filePath.slice(filePath.lastIndexOf('/') + 1);
    // console.log(dir);
    // console.log(file);
    try {
        const dirFiles = fs.readdirSync(dir);
        // console.log(dirFiles);
        return dirFiles.includes(file);
    } catch (error) {
        // console.log(error);
    }
    return false;
};

console.log(
    'fileExistsSync ./textRename.txt: ',
    fileExistsSync('./textRename.txt')
);

console.log(
    'fileExistsSync ./textCopy.txt: ',
    fileExistsSync('./textCopy.txt')
);

console.log(
    'fileExistsSync non existent file: ',
    fileExistsSync('vybuhciosncijw uhicnjmsd')
);
