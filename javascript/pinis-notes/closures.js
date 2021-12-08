/*
we dont declare closures manually, it happens automatically in certain situations like this one:
 */

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
//booker function is in the global scope
const booker = secureBooking();
booker();
booker();
booker();

/*
a closure makes a function remember all the variables that existed at the functions birthplace.
Any function always has access to the variable environment where the function was created
So this booker function was born in secure booking function. Therefore the booker function will get access to the variable environment which contains the passengerCount variable.
So the variable envirnment of the secureBooking function is attached to the booker function because the booker function was in the scope of the secureBooking function when it was created.
The scope chain is preserved, even when rthe scope essentially has been destroyed. Because its execution context is gone.The envirment variables are living somewhere in the engine.

when we invoke the booker function , the function attempts to increase the passenger variable. How ever the variable is not in the current scope (because the booker is now in the global scope). So js will immedeatly look into the closure and see if it can find the variable there. And it does this even before looking at the scope chain. For example if there was a global passengerCount variable set to 10 it was first use the one in the closure. It was proiroty over the scope chain.

shows you the function properties, including its closures which is the variable envirment of the securebookeing function.[[]] double rackets mean internal property wehich you cannot access from our code.
console.dir(booker);
summary:
functions can access the their parents functions scoped variable and if that parent function has returned. The function keeps a reference to its outer scope, which presevers the scope chain throught out.

In other words:A closure makes sure that a function doesn't loose connection to variablers that existed at the functions birth place.

 */

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();
//console.dir(f)

// //reassign

// const x = function () {
//   const a = 30;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// x();
// f();
//console.dir(f)

// //
