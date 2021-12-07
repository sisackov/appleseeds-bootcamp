function max(array) {
  return array.reduce((highest, count) => {
    return highest > count ? highest : count;
  });
}
// console.log(max([1, 2, 30, 20, -4]));

function avg(numbers) {
  return numbers.reduce((total, amount) => {
    return total + amount / numbers.length;
  });
}
console.log('avg', avg([1, 2, 30, 20, -4, 144]));

function even(array) {
  const even = array.filter((i) => {
    return i % 2 === 0;
  });
  return even.reduce((acc, val) => {
    return acc + val;
  });
}
// console.log(even([1, 11, 50, 40, 20, 4]));

//Shorter way to write it:
// const sumEvens = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);
