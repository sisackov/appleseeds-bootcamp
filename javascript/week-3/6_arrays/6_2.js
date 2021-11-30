const people = ["Greg", "Mary", "Devon", "James"];

/* 1. Using a loop, iterate through this array and console.log all of the people. */
console.log('   ');
const logArray = (arr) => {
    for (let item of arr) {
        console.log(item);
    }
}

logArray(people);

console.log('   2. Write the command to remove "Greg" from the array.');
people.shift();
logArray(people);

console.log('   3. Write the command to remove "James" from the array.');
people.pop();
logArray(people);

console.log('   4. Write the command to add "Matt" to the front of the array.');
people.unshift('Matt');
logArray(people);

console.log('   5. Write the command to add your name to the end of the array.');
people.push('Stas');
logArray(people);

console.log('   6. Using a loop, iterate through this array and after \
console.log - ing "Mary", exit from the loop.');
for (let item of people) {
    console.log(item);
    if (item === "Mary")
        break;
}

console.log('   7. Write the command to make a copy of the array using slice.\
The copy should NOT include "Mary" or "Matt".');
let copyPeople = people.slice(2);
logArray(copyPeople);

console.log('   8. Write the command that gives the indexOf where "Mary" is located.');
console.log(people.indexOf('Mary'));

console.log('   9. Write the command that gives the indexOf where "Foo" is located(this\
should return -1).');
console.log(people.indexOf('Foo'));

console.log('   10. Redefine the people variable with the value you started with.Using the\
splice command, remove "Devon" from the array and add "Elizabeth" and "Artie".\
Your array should look like this when you are done["Greg","Mary", "Elizabeth", "Artie", "James"].');
people.splice(0);
people.push("Greg", "Mary", "Devon", "James");//redefining
logArray(people);
console.log();
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
logArray(people);

console.log('   11. Create a new variable called withBob and set it equal to the people \
array concatenated with the string of "Bob".');
let withBob = people.concat('Bob');
console.log(withBob);
