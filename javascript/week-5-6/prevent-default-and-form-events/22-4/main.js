// **************************************************
// Define state variables
// **************************************************
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const winnerMessageElement = document.querySelector('#winner-message');
const winnerMessageTitleElement = document.querySelector('#winner-message h2');
const restartButtonElement = document.querySelector('#winner-message button');
let player1ActiveElement = document.querySelector('#player1-race .active');
let player2ActiveElement = document.querySelector('#player2-race .active');

// **************************************************
// Define functions
// **************************************************

/**
 * @param {*} input
 * @returns {boolean} true if input is a letter
 */
const inputValidator = (input) =>
    input && input.length === 1 && alphabet.includes(input.toLowerCase());

function handleUserInput(input) {
    if (inputValidator(input)) {
        input = input.toLowerCase();
        if ('q' === input) {
            moveCar(player1ActiveElement, 'player1');
        } else if ('p' === input) {
            moveCar(player2ActiveElement, 'player2');
        }
    }
}

/**
 * @param {Element} carActiveElement
 * @param {string} playerName
 */
function moveCar(carActiveElement, playerName) {
    console.log('moveCar', playerName);
    console.dir(carActiveElement);

    if (carActiveElement.nextElementSibling.classList.contains('finish')) {
        displayWinnerMessage(`${playerName} won!`);
    } else {
        carActiveElement.classList.remove('active');
        carActiveElement.nextElementSibling.classList.add('active');
        if (playerName === 'player1') {
            player1ActiveElement = carActiveElement.nextElementSibling;
        } else {
            player2ActiveElement = carActiveElement.nextElementSibling;
        }
    }
}

function displayWinnerMessage(message) {
    winnerMessageElement.classList.remove('hide');
    winnerMessageTitleElement.textContent = message;
}

function resetGame() {
    winnerMessageElement.classList.add('hide');

    player1ActiveElement.classList.remove('active');
    player1ActiveElement = document.querySelector(
        '#player1-race td:first-child'
    );
    player1ActiveElement.classList.add('active');

    player2ActiveElement.classList.remove('active');
    player2ActiveElement = document.querySelector(
        '#player2-race td:first-child'
    );
    player2ActiveElement.classList.add('active');
    // resetPlayer(player1ActiveElement, '1');
    // resetPlayer(player2ActiveElement, '2');
}

/* TODO WHY this is not working!!!!!!!!!!!!!
 function resetPlayer(activeElement, playerNumber) {
    activeElement.classList.remove('active');
    let selector = `#player${playerNumber}-race td:first-child`;
    activeElement = document.querySelector(selector);
    activeElement.classList.add('active');
} */

// **************************************************
// Define event listeners
// **************************************************

window.addEventListener('keyup', (event) => {
    const input = event.key;
    handleUserInput(input);
});

restartButtonElement.addEventListener('click', () => resetGame());
