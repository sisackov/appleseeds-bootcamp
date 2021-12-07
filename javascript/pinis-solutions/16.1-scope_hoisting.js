/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

//Block 1
// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// funcA();

// we would get undefined error, the function call the variable 'a' before declaring it.
// need to declare the var at the top, before console.log(a).

// Block 2

// var fullName = 'John Doe';
// var obj = {
//  fullName: 'Colin Ihrig',
//  prop: {
//  fullName: 'Aurelio De Rosa',
//  getFullName: function () {
//  return this.fullName;
//  }
//  }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

//the first result is 'Aurelio De Rosa'
//the second result is undefined 'John Doe'. when a method assign to a variable the values printed to the console are from the global

// Block 3

// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//    }
//    funcB();
//    console.log(typeof a);
//    console.log(typeof b);

// the first is undefined - a is local variable, we can use a only nside the function.
// the second - type of b is a number => b is global variable.

// Block 4

//    function funcC() {
//     console.log("1");
//    }
//    funcC();
//    function funcC() {
//     console.log("2");
//    }
//    funcC();

// both will be 2 => the functions are hoising to the top. the second function shadowing the first.

// Block 5

//    function funcD1() {
//     d = 1;
//    }
//    funcD1();
//    console.log(d);
//    function funcD2() {
//     var e = 1;
//    }
//    funcD2();
//    console.log(e);

// the first console => return 1. d is global variable and can be used anywhere.
// second console => not defined. e is local variable var is functioned scoped. need to declare e outside the function.

// Block 6

//    function funcE() {
//     console.log("Value of f in local scope: ", f);
//    }
//    console.log("Value of f in global scope: ", f);
//    var f = 1;
//    funcE();

// undefined - function can see the variable but not the value. the variable need to be declare before the function.
// 1 => f is global and can be print.
