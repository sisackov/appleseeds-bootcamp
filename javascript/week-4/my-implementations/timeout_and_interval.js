/**
 * Code along from https://www.youtube.com/watch?v=kOcFZV3c75I&ab_channel=freeCodeCamp.org
 */
/* setTimeout and setInterval */

/**
 * setTimeout - sets a timer which executes a function or specified piece of code 
 * once the timer expires. time passed as milliseconds
 */
var timeoutID = setTimeout(bye, 3000);

console.log('hello');

clearTimeout(timeoutID);// resets the timeout thus cancelling the function call

function bye() {
    console.log('goodbye');
}


// 
/**
 * setInterval - repeatedly calls a function or executes a code snippet,
 *  with a fixed time delay between each call
 */
var count = 0;
var intId = setInterval(counter, 1000);

function counter() {
    console.log(++count);
}

/**
 * <button onclick="clearInterval(intId)">Stop time</button>
 *
 * clicking the above button will stop the execution of method
 * since clearInterval(varName) resets the setInterval call
 */
