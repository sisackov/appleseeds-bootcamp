const numbers = [1, -5, 666, 2, 400, 11];

// sort by descending order:

const sortedByDescending = numbers.sort();
console.log(sortedByDescending);
//sort by ascending order:
const sortedByAscending = numbers.sort((a, b) => b - a);
console.log(sortedByAscending);
