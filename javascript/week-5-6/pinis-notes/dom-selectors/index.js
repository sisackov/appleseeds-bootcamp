//* old way
let el;
el = document.getElementById("logo");
el = document.getElementsByClassName("menu-item");
el = document.getElementsByName("fname");
el = document.getElementsByTagName("div");

//* universal selector
el = document.querySelector("*");
el = document.querySelectorAll("*");

//* node name
el = document.querySelector("p");
el = document.querySelectorAll("p");

//* class selector
el = document.querySelector(".menu-item");
el = document.querySelectorAll(".menu-item");

//* ID selector
el = document.querySelector("#logo");

//* Attribute Selector
el = document.querySelector("a[href='#services']");
el = document.querySelector("[href='#services']");
el = document.querySelector("img[src='js.png']");
el = document.querySelector('input[name="fname"]');
el = document.querySelector('[name="fname"]');
el = document.querySelector("[data-custom='hello']");
el = document.querySelector("[data-custom]");

//*Grouping selectors
//selector, selector...
el = document.querySelectorAll("p,a");

//* Child combinator
//direct children
//selector > selector
el = document.querySelectorAll("ul > li");

//* General sibling combinator
//The general sibling selector (~) selects all elements that are siblings of a specified element.
//selector ~ selector
// el = document.querySelectorAll("h2 ~ button, p");

//* Adjacent sibling combinator
//The adjacent sibling selector is used to select an element that is directly after another specific element.
// selector + selector
// el = document.querySelectorAll("p + button");

//* nth-child
el = document.querySelectorAll("ul > li:nth-child(2)");

//* Pseudo-classes and Pseudo Elements
//a:hover, a::after
// You cannot because they are not part of the DOM

//*difference between html collections and node lists
let el2;
el = document.getElementsByClassName("menu-item");
el2 = document.querySelectorAll(".menu-item");

//!HTML Collections
//* only 2 methods -> .item and .namedItem
//* includes only the element itself
//*does not include text nodes
//* they are live
el.item(0);
el.namedItem("x");
// el[0].remove();
console.log(el);

//! Html NodeList
//* many more methods -> item, entries, keys, values

el2.item(0);
//also keys
for (let val of el2.values()) {
  console.log(val);
}
//* Includes the element itself and also its text nodes
//* includes text nodes
//* they are static
el2[0].remove();
console.log(el2);

//* most importantly you cant iterate over it with the forEach method

//* HTML collection
// el.forEach((ele) => {
//   console.log(ele);
// });

//*works around create an array
const x = Array.from(el);
const y = [...el];
console.log(y);

//* NodeList
el2.forEach((ele) => {
  console.log(ele);
});
