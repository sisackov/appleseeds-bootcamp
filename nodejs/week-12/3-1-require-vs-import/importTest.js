import fs from 'fs';
import path from 'path';

console.log(fs.readdirSync(path.resolve('./', '../'))); //string array of all files in the parent directory

// console.log(__dirname); //throws an error
// console.log(__filename); //throws an error

const person = {
    name: 'John',
    age: 30,
};

const getPerson = () => person;

const add = (a, b) => a + b;

let dummy = () => 'dummy';

export { getPerson, add, dummy };
