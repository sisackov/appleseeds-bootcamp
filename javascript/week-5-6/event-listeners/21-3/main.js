let textArea = document.querySelector('textarea');
let span = document.querySelector('span');

function validateTextAreaInput() {
    let str = textArea.value;
    if (str && str.replace(' ', '').length > 99) {
        span.textContent = 'Input is valid';
    } else {
        span.textContent =
            'Input not valid! Please insert at least 100 characers';
    }
}

document
    .querySelector('input')
    .addEventListener('click', validateTextAreaInput);
