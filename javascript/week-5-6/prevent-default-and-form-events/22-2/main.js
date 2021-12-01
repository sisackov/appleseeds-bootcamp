let container = document.querySelector('.container');

const checkboxElement = document.querySelector('input[type="checkbox"]');
const lightbulbElement = document.querySelector('#lightbulb');
console.dir(lightbulbElement);

checkboxElement.addEventListener('click', () => {
    console.log('checkbox clicked');
    lightbulbElement.classList.toggle('hide');
});
