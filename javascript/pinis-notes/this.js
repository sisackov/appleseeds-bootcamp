"use strict";
/*
Rules of the this keyword:
1. every function gets the this keyword/variable 
2. It points to the "owner" of the function in which the this keyword is used.
3. this keyword does NOT point to the function itself. only to the owner of that function. To whoever called it.
4. this keyword is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.


How to call functions:

1. methods in an object: this keyword points to the object which the method is called. (Method needs to be a normal function not an arrow)
Owner: is the object who called the method

2. normal functions: 
Owner: window object, strict-mode: undefined.

3. arrow function: do not get their own this keyword. Gets the this keyword lexically. Pointing up.
Owner: is the parent scope

4. event listener:
this keyword is attached to the DOM element that the handler is attached to.
Owner: Element that called the event listener

What is the this keyword is NOT:
this keyword does NOT point to the function itself
this keyword does not point to its variable enviroments
*/

//global scope
console.log(this);

//regular function without any object attached. No "owner" attached
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //global or undefined in strict mode
  console.log(this);
};
calcAge(1980);

//arrow function does not get its own this keyword it simply uses the lexically this keyword of its parent scope
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  //global
  console.log(this);
};
calcAgeArrow(1980);

//function as a method
const timmy = {
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

//timmy object was calling this method. He became the owner of the method
timmy.calcAge();

const johnny = {
  year: 1985,
};

//we are doing method borrowing
//now the this keyword points to johnny.
// johnny.calcAge = timmy.calcAge;
// johnny.calcAge();

//always points to the object who caLLS THE METHOD. It is dynamic and not static

//a function is just a value so we can store that particular function in a variable
// const f = timmy.calcAge;

//now the f is just a regular function call so points to global or undeifned in strict mode.

// f();

//*arrows vs regular functions in objects
//what happens when we create this var firstName ="pini" do this afterwards
//var firstName ="pini"
const ben = {
  firstName: "ben",
  year: 1980,
  greet: () => {
    console.log("this", this);
    console.log(`Hey ${this.firstName}`);
  },
};
ben.greet();
//arrow functions do not get their own this keyword looks at the parent scope which is window

//rule of thumb is always create methods with regular functions not with arrow functions

//change it to a normal function and all is good
const harry = {
  firstName: "harry",
  year: 1980,
  greet: function () {
    console.log(this);
    console.log(`Heeeeeeeey ${this.firstName}`);
  },
};
console.log("yup");
harry.greet();

//what happens if you use a regular function inside a method?
const john = {
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //solution
    // const self = this;
    const isOld = function () {
      console.log(self);
      console.log(this);
      console.log(this.year > 1970 && this.year < 1990);
    };
    // isOld();
    //then do this
    // const isOldArrow = () => {
    //   console.log(this);
    //   console.log(this.year > 1970 && this.year < 1990);
    // };
    // isOldArrow();
  },
};

john.calcAge();
//we are doing a regular function call. Even if its an object.
//regular function doesn't have its own this keyword so it will point to global or undefined in strict mode

//to fix this we can use we can use const self = this; but arrow functions are better
//arrow function looks iup the parent scope which is the calcAge method and takes the this keyword from there.

//event listeners

// document.querySelector(".cool").addEventListener("click", function (e) {
//   console.log(this);
//   console.log(e.currentTarget);
// });
//arrow functions will point to the window object
