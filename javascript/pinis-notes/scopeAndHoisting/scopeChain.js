//scope chain
//different scopes =global scope, block scopes, function scopes, if scopes
//inner scopes has access to its parent's scope. But outer scopes don't have access to the inner scopes
//lexical scoping/scope chaining lookup
//sibling scopes don't have access to one another. scope chain always works upwards not sideways.
const counter = "im a global scope";
function first() {
  const x =
    "I only be accessed from the child scope but the global scope cant reach me";
  console.log(counter); // cannot find it in the current scope so it does a lookup.
  function second() {
    console.log(x); // i can look up the scope chain and access x
    const y = "Siblings cannot access me";
  }
  console.log(y); // i am in the parent scope cannot access inner scopes

  second();
  function third() {
    console.log(y);
    // cannot access siblings
  }
  third();
}
first();
