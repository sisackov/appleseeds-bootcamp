const inputButton = document.querySelector("input[type='button']");
const inputText = document.querySelector("input[type='text']");
const smileyContainer = document.querySelector('.smiley-container');

const getSmileyImg = () => {
    const img = document.createElement('img');
    img.classList.add('smiley');
    img.alt = 'smiley emoticon';
    return img;
};

function fillContainerWithSmileys(num) {
    for (let i = 0; i < num; i++) {
        if (i > 10 && i < 20) {
            smileyContainer.appendChild(getOrangeImg());
        } else {
            smileyContainer.appendChild(getSmileyImg());
        }
    }
}

/**
 * Method that removes all children of an element.
 * element.innerHTML = ""; => this will result in same however it doesn't remove event listeners
 * @param {Element} element
 */
function removeAllChildren(element) {
    if (!element) throw new ReferenceError('Element undefined');

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

inputButton.addEventListener('click', () => {
    removeAllChildren(smileyContainer);
    let num = parseInt(inputText.value);
    if (num) {
        fillContainerWithSmileys(num);
    } else {
        smileyContainer.textContent = 'Invalid number! Please try again';
    }

    console.log(num);
});

// clears the container after change in the input
inputText.addEventListener('change', () => removeAllChildren(smileyContainer));
