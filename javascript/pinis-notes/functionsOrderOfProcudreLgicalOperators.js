//! different ways to declare functions
//* function declaration
function myFunc() {
  return "hello";
}
//* Arrow function
const myFunc3 = () => {
  return "hello";
};
//* function expression
const myFun1 = function () {
  return "hello";
};
const myFun2 = () => {
  return "hello";
};

//* explicit function returns
const myFun4 = () => {
  return "hello";
};
//* implicit function returns
const myFunc4 = () => "hello";
const myFunc5 = (a) => a + 5;

//*IIFE (Immediately Invoked Function Expression)
(function (a, b) {
  console.log(a + b);
})(1, 2);

((a, b) => {
  console.log(a + b);
})(1, 2);

//! Order of procedure
const now = 2037;
const ageHarry = now - 1991;
const ageSarah = now - 2018;

console.log(ageHarry > ageSarah);
//* mathematical operators generally have a higher procedure than logical operators
//* it will first evaluate the - then evalaute the greater than
console.log(now - 1991 > now - 2018);

//* the minus operator reads from left to right
console.log("a", 25 - 10 - 5);

let x, y;
//* the assignment operator reads from right to left
x = y = 25 - 10 - 5; //x=y=10, y=10 x=10
//if it was the other way around then x =y and y is undefined
console.log("y", x, y);
console.log(ageHarry, ageSarah);

//* group operator has the highest procedure
const averageAge = (ageHarry + ageSarah) / 2;
console.log(averageAge);

//! logical operators

//* And operator
//* only if both are true it will be true
console.log(true && true); //true
console.log(true && false); //false
console.log(true && true && true && false); //false

//*or operator
//*if only one is true it will be true
console.log(true || false);
console.log(false || false);
console.log(true || true);
//* the && operator has a higher procedure than the || operator
console.log(true || (false && true));

//* how this all fits in if statements
const myVar = 0;
const myVar2 = "string";
if (myVar && myVar2) {
  console.log("i am inside");
}
if (myVar || myVar2) {
  console.log("i am inside!!!");
}
//* bang operator. Changing a truthy or falsy value to the opposite value
if (!myVar2) {
  console.log("im now here");
}

const myObj = {};
if (myObj) {
  console.log("im now here!!!!!!!!!!!!!!!!!!!");
}
