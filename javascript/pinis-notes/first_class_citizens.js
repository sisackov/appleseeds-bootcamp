function myCustomFunction(a, b) {
  return a + b;
}

//! Parameter = placeholder
//! Arguments = actual values
const add = myCustomFunction(1, 2);
const add2 = myCustomFunction(2, 5);

//* First class Citizins, first class objects
// you can assign them to variables
//you can pass them to arrays
//you can pass them a new property
// you can return a new function
// pass them as arguments to different functions

//! You can pass them to variables
const myObj = {};
const myFunc = function () {
  return "hello";
};

//! can pass them to array
const myArray = [];
myArray.push(myObj);
myArray.push(myFunc);
console.log(myArray);
console.log(myArray[1]());

//! can pass a new property
myObj.newProperty = "value";
console.log(myObj.newProperty);
myFunc.newProperty = "value";
console.log(myFunc.newProperty);

//! can return a new function

function myCoolFunc() {
  return function () {
    return "hello";
  };
}
console.log(myCoolFunc()());

//! can pass them as arguments to other functions

function myOtherFunc(fn) {
  console.log(fn());
}
myOtherFunc(myFunc);
