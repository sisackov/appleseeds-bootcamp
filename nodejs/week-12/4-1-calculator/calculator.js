const yargs = require('yargs');
const { add, sub, mult, pow } = require('./utils');

const getBuilder = () => {
    return {
        num1: {
            describe: 'First number',
            demandOption: true,
            type: 'number',
        },
        num2: {
            describe: 'Second number',
            demandOption: true,
            type: 'number',
        },
    };
};

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add 2 numbers',
    builder: getBuilder(),
    handler(argv) {
        console.log('Result: ' + add(argv.num1, argv.num2));
    },
});

yargs.command({
    command: 'sub',
    describe: 'Subtract 2 numbers',
    builder: getBuilder(),
    handler(argv) {
        console.log('Result: ' + sub(argv.num1, argv.num2));
    },
});

yargs.command({
    command: 'mult',
    describe: 'Multiply 2 numbers',
    builder: getBuilder(),
    handler(argv) {
        console.log('Result: ' + mult(argv.num1, argv.num2));
    },
});

yargs.command({
    command: 'pow',
    describe: 'Power of 2 numbers',
    builder: getBuilder(),
    handler(argv) {
        console.log('Result: ' + pow(argv.num1, argv.num2));
    },
});

yargs.parse();
// console.log(yargs.argv);
