/*
in a nut shell:
global scope,function scoped,blocked scopes
scoping:
lexical scoping can look up but cant look down or sideways (siblings)

variables:
global variables: accessed anywhere
const and let are blocked scoped
var is function scoped. in strict mode blocked scoped.

 */
//global scope
const counter = "global scoped"; // you can put this before we call first()
function first() {
  console.log(counter); // doing a lookup to the parent scope and found it.
  console.log(random); // doing a lookup to the parent scope cannot find it
  //inner scope can get accseed to the outer scope but not the other way around
  var z = "hi";
  //function scoped
  const x = true;
  if (x) {
    console.log(
      "i am a child of first Function I can be accessed - lexical scoping",
      x
    );
    let foo = "i am blocked scoped";
    const boo = "i am blocked scoped too";
    //var function scoped
    var coo = "i am only function scoped I can be accessed";
    console.log(z);
  }
  function second() {
    console.log(counter); // looks up has access to parent scope, parent scope has access to global
    const poo = "nobody from up above can access me";
    // i cannot access foo and boo because they are siblings. Only the parents I can access to. like x
    console.log(foo, boo, coo, x);
  }
  second();
}
first();
