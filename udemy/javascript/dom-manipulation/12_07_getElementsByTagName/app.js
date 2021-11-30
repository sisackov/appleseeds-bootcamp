//To select all li's
document.getElementsByTagName('li');

// To select all h1's (there's only one on this page):
document.getElementsByTagName('h1');

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName('input'); //get all inputs
console.log(typeof inputs);//object
console.dir(inputs);// this HTMLCollection: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
inputs[0]; //this works

for (const item of inputs) {//we can iterate like in array
    console.log(item);
}

inputs.pop() //DOES NOT WORK! pop() is an array method, and this isn't an array!

