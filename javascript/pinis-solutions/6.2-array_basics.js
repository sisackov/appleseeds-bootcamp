const people = ['Greg', 'Mary', 'Devon', 'James'];
// 1

for (let i = 0; i < people.length; i++) {
  // console.log(people[i]);
}

// 2

people.shift();

// 3

people.pop();

// 4

people.unshift('Matt');

// 5

people.push('Ellie');

// 6

for (var i = 0; i < people.length; i++) {
  if (people[i] === 'Mary') {
    console.log(people[i]);
    break;
  }
}

// 7

console.log(people.slice(2));

// 8

people.indexOf('Mary');

// 9

people.indexOf('Foo');

// 10

const people2 = ['Greg', 'Mary', 'Devon', 'James'];

people2.splice(2, 1, 'Elizabeth', 'Artie');

// 11

const withBob = people2.concat('Bob');
const withBob2 = [...people2, 'Bob'];
console.log(withBob2);
console.log(people2);
