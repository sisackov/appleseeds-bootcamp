// **************************************************
// Define state variables
// **************************************************

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let answer = randomLetterSelector();
console.log(answer);
let guessesArray = [];
const inputMessageElement = document.querySelector('.input-message');
const guessedKeysElement = document.querySelector('.guessed-keys');
// console.dir(inputMessageElement);
// console.dir(guessedKeysElement);

// **************************************************
// Define functions
// **************************************************

/**
 * @returns {string} random letter from alphabet
 */
function randomLetterSelector() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

/**
 * @param {*} input
 * @returns {boolean} true if input is a letter
 */
const inputValidator = (input) =>
    input && input.length === 1 && alphabet.includes(input.toLowerCase());

function handleUserInput(input) {
    if (inputValidator(input)) {
        input = input.toLowerCase();
        console.log('handleUserInput', input);
        if (answer === input) {
            handleCorrectGuess();
        } else {
            handleWrongGuess(input);
        }
    }
}

function handleCorrectGuess() {
    clearClassList(inputMessageElement);
    inputMessageElement.classList.add('input-message--correct');
    inputMessageElement.textContent = 'Right letter!';
    guessedKeysElement.textContent = '';
    answer = randomLetterSelector();
    guessesArray = [];
}

function handleWrongGuess(input) {
    inputMessageElement.classList.add('input-message--incorrect');
    console.log(handleWrongGuess);
    console.dir(inputMessageElement);
    console.dir(guessedKeysElement);
    if (guessesArray.includes(input)) {
        inputMessageElement.textContent = input + ' has already been guessed';
    } else {
        guessesArray.push(input);
        console.log(guessesArray);
        inputMessageElement.textContent = 'Nope, wrong letter';
        guessedKeysElement.textContent = guessesArray.join(', ');
    }
}

function clearClassList(element) {
    for (const cls of element.classList) {
        element.classList.remove(cls);
    }
}

// **************************************************
// Define event listeners
// **************************************************

// reset the input message when the user starts typing
// window.addEventListener('beforeinput', () => {
//     console.log('beforeinput');
//     clearClassList(inputMessageElement);
//     inputMessageElement.textContent = 'Guess a letter';
//     console.log(inputMessageElement);
// });

window.addEventListener('keyup', (event) => {
    const input = event.key;
    console.log(event);
    console.log(input);
    handleUserInput(input);
});
