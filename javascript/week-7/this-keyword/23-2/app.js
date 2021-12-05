const storm = {
    superPower: 'control the weather',
    printSuperPower: printSuperPower,
};

function printSuperPower() {
    console.log('my superpower is ' + this.superPower);
}

storm.printSuperPower();
