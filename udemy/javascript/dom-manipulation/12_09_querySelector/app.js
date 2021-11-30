// ****************
// querySelector
// ****************
//To find the first li on the page:
const li = document.querySelector('li');
console.dir(li);

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');


// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
const allLi = document.querySelectorAll('li');
//returns a NodeList - https://developer.mozilla.org/en-US/docs/Web/API/NodeList
console.dir(allLi);

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');