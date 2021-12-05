/**1. In your own words what will this point to and why? */
console.log(this);
// this points to the global object, which is the window object in the browser.

/**2.
 *  a. In your own words what will this point to and why.
 *  b. How can you fix this code.
 * */
const myObj = {
    name: 'Timmy',
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
    greet2: function () {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
// a. this points to the  global object, which is the window object in the browser because of the arrow function
// b. By changing the arrow function to a regular function, we can fix the problem.
myObj.greet2();

/**3. In your own words what will this point to and why.  */
const myFuncDec = function () {
    console.log(this);
};
// this points to the global object, but in this case, it points to the function caller

/**4. In your own words what will this point to and why.  */
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
// this points to the global object, and will stay that way since this is an arrow function

/** 5.
 * a.In your own words what will this point to and why.
 * b.How can you fix this code.
 * */
// document.querySelector(".element").addEventListener('click', () => {
//     console.log(this);
// });
document.querySelector('.element').addEventListener('click', function () {
    console.log(this);
});
// a. this points to the global object, because of the arrow function
// b. By changing the arrow function to a regular function, we can fix the problem
//   and this will point to the element that was clicked.
