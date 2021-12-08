const myArray = ["Hello", "shalom", "morjesta"];
//forEach doesnt return you anything. map does
const x = myArray.map((el, index, arr) => {
  return el + "!";
});
console.log(x);

//maps and foreach get a callback function so you can also create the function outside or inline as you usually do
const myFunc = (el, index, array) => {
  console.log(el, index, array);
};
myArray(myFunc);

//don't forget the double returns inside a function
const toUpperCase = (arr) => {
  return arr.map((el) => {
    return el.toUpperCase();
  });
};
const x = toUpperCase(myArray);
// console.log(x);

//!when to use foreach?

//*want to console log something

//*want to change the original array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((el, i) => {
  numbers[i] = el + 1;
});
console.log(numbers);

//*want to do an if statment inside (you don't want the same length back) but in this case filter method would be a better option
const bla = myArray.map((el) => {
  if (el === "Hello") {
    return el + " " + "hi";
  }
});

//*change all the buttons to color red

//*put things in the database
