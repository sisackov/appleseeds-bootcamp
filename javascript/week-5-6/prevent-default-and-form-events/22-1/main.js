const inputNameElement = document.querySelector('input[type="text"]');
const inputAgeElement = document.querySelector('input[type="number"]');
const inputEmailElement = document.querySelector('input[type="email"]');
const submitElement = document.querySelector('button[type="submit"]');

//** modal dialog **/
const modal = document.querySelector('.modal');
const userMessageElement = document.querySelector('#user-message');
const confirmButton = document.querySelector('#confirm-btn');

function displayModal() {
    userMessageElement.style.color = 'black';
    modal.style.display = 'block';
    document.querySelector('#user-name').textContent =
        'Name ' + inputNameElement.value;
    document.querySelector('#user-age').textContent =
        'Age ' + inputAgeElement.value;
    document.querySelector('#user-email').textContent =
        'Email ' + inputEmailElement.value;
}

function closeModal() {
    modal.style.display = 'none';
}

submitElement.addEventListener('click', (event) => {
    event.preventDefault();
    displayModal();
});

[
    document.querySelector('.close-modal'),
    document.querySelector('#cancel-btn'),
].forEach((element) => {
    element.addEventListener('click', closeModal);
});

confirmButton.addEventListener('click', () => {
    userMessageElement.style.color = 'green';
    userMessageElement.textContent =
        'Congratulations you successfully sent this form';
});
