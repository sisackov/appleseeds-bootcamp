//let and const are block scoped
//var are function scoped

function first() {
  console.log(globalScope); // i can access global scope

  console.log(x, y); // cannot access block scoped variables
  console.log(z); // i can access var because it is function scoped
  const w = "c";

  {
    //inside a block
    let x = "i am block scoped";
    const y = "i am block scoped too";
    var z = "I am only function scoped";
    console.log(w); // i can access const and let because they are blocked scoped
  }
  {
    console.log(z); // i can access z because var is only function scoped
    console.log(x); // cannot access because they are blocked scope
  }

  function second() {
    console.log(z); // var is only function scoped i can access it
    console.log(x, y); // cannot access block scoped
  }
  second();
}
const globalScope = "accessed anywhere";
first();
