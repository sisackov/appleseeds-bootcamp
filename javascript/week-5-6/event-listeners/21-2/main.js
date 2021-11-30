let p = document.querySelector('p');
let inputList = document.querySelectorAll('input');
let fontSize = 16;

function changeParagraphFontSize(change) {
    if (fontSize > 6 && fontSize < 100) {
        fontSize += change;
        p.style.fontSize = fontSize + 'px';
    }
    console.log(fontSize); //TODO
}

changeParagraphFontSize(0);
inputList.forEach((inputElem) => {
    inputElem.addEventListener('click', () =>
        changeParagraphFontSize(parseInt(inputElem.dataset.change))
    );
});
