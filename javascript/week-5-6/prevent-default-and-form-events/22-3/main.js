// **************************************************
// Define state variables
// **************************************************

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let answer = randomLetterSelector();
console.log(answer);
let guessesArray = [];
const containerElement = document.querySelector('.container');
const inputMessageElement = document.querySelector('.input-message');
const guessedKeysElement = document.querySelector('.guessed-keys');
const reloadMessage = document.querySelector('.reload-message');
const reloadButton = document.querySelector('.reload-button');

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
            handleCorrectGuess(input);
        } else {
            handleWrongGuess(input);
        }
    }
}

function displayMessage(message, color) {
    inputMessageElement.textContent = message;
    inputMessageElement.style.color = color;
}

function handleWrongGuess(input) {
    inputMessageElement.style.color = 'red';
    if (guessesArray.includes(input)) {
        displayMessage(input + ' has already been guessed', 'red');
    } else {
        guessesArray.push(input);
        displayMessage('Nope, wrong letter', 'red');
        guessedKeysElement.textContent = guessesArray.join(', ');
    }
}

function handleCorrectGuess(input) {
    displayMessage(input + ' - Right letter!', 'green');
    changeVisibilityOfBottomElements(false);
}

function changeVisibilityOfBottomElements(visibility) {
    document.querySelector('h2').style.display = visibility ? 'block' : 'none';
    guessedKeysElement.style.display = visibility ? 'block' : 'none';

    reloadMessage.style.display = visibility ? 'none' : 'block';
    reloadButton.style.display = visibility ? 'none' : 'block';
}

function resetGame() {
    answer = randomLetterSelector();
    guessesArray = [];

    displayMessage('Guess a letter', 'black');
    guessedKeysElement.textContent = '';
    changeVisibilityOfBottomElements(true);
}

function clearClassList(element) {
    for (const cls of element.classList) {
        element.classList.remove(cls);
    }
}

// **************************************************
// Define event listeners
// **************************************************

window.addEventListener('keyup', (event) => {
    const input = event.key;
    console.log(event);
    console.log(input);
    handleUserInput(input);
});

reloadButton.addEventListener('click', () => resetGame());
