const fs = require("fs");
const path = require('path');

/* Creates folders */
function createFolders(name, start, stop) {
    for (let i = start; i <= stop; i++) {
        let dir = name + i;
        console.log(dir);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }
}

// createFolders('./udemy/functions/', 91, 95);


/* Creates files */
function createFiles(folder, prefix, start, stop, suffix) {
    let relPath = path.join(__dirname, folder);
    for (let i = start; i <= stop; i++) {
        let file = relPath + prefix + i;
        if (suffix) {
            file += suffix;
        }
        // console.log(file);
        fs.writeFile(file, '', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`File ${file} created`);
            }
        });
    }
}

createFiles('/bootcamp_hw/debugging/', '15_', 1, 5, '.js')