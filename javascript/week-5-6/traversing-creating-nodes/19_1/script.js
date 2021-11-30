/** Create a variable that holds the <li> element with the class “start-here”. */
const start = document.querySelector('.start-here');
console.dir(start);

/** Use traverse methods to complete these tasks: */
/** 1. Change the text from “title 2” to “main title” */
start.textContent = 'main title';

/** 2. Add another sub title with the text “sub title 4” */
const sub4 = document.createElement('li');
sub4.innerText = 'sub title 4';
start.nextElementSibling.childNodes[1].appendChild(sub4);

/** 3. Delete the last <li> element from the list. */
start.parentElement.removeChild(start.nextElementSibling.nextElementSibling);

/** 4. Change the <title> element text to “Master Of The Dom”. */
let node = start;
while (node && node.nodeName !== 'HTML') {
    //going up the tree till we reach the html
    node = node.parentNode;
}

node = node.firstElementChild; //first child of html is the head tag
let flag = true;
for (let i = 0; i < node.childNodes.length && flag; i++) {
    let elem = node.childNodes[i];
    if (elem.nodeName === 'TITLE') {
        elem.innerText = 'Master Of The Dom';
        flag = false; //equivalent to break
    }
}

/** 5. Change the text of the <p> element ot something else of your */
console.dir(start.parentElement.nextElementSibling.childNodes[1]);
start.parentElement.nextElementSibling.childNodes[1].innerText =
    'BYE BYE BIRDIE!';
