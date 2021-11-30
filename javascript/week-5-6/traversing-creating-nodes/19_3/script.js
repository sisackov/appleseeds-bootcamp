const numInputs = document.querySelectorAll('form input');
console.dir(numInputs);

numInputs.forEach((elem) => {
    elem.addEventListener('input', () => {
        if (elem.nextElementSibling) {
            elem.nextElementSibling.focus();
        } else {
            verify();
        }
    });
});

document.querySelector('.btn').addEventListener('click', verify);
function verify() {
    let str = '';
    numInputs.forEach((elem) => {
        str += elem.value + ' ';
    });
    document.querySelector('#output').textContent = str;
}

function fillInputsFromPaste(event) {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    numInputs.forEach((elem, index) => {
        elem.value = paste[index] || '';
    });
}

document
    .querySelector('.flex-container')
    .addEventListener('paste', fillInputsFromPaste);

numInputs[0].addEventListener('paste', (event) => {
    fillInputsFromPaste(event);
    event.preventDefault();
    verify();
});
