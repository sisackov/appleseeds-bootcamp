//! What is the difference between import and require?
//* 1-  require is Non-lexical, it stays where they have put the file.
//*     import is lexical, it gets sorted to the top of the file.
//* 2-  require can be called at any time and place in the program.
//*     import can't be called conditionally, it always run in the beginning of the file

//! How can you enable using the import syntax using node js
//* 1 - use the --experimental-modules flag in the node command line[Deprecated].
//* 2 - set "type": "module" in package.json.

//! Give 2 node.js environment variables that are not available when using the import syntax.
//* __dirname
//* __filename

//!   Create 3 functions using the export/import syntax.
import { getPerson, add, dummy } from './importTest.js';
console.log(getPerson());
console.log(add(1, 2));
console.log(dummy());

//! Import the file system module using the import syntax.
import fs from 'fs';

fs.stat('app.js', (error, stats) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Stats object for: app.js');
        console.log(stats);

        // Using methods of the Stats object
        console.log('Path is file:', stats.isFile());
        console.log('Path is directory:', stats.isDirectory());
    }
});
