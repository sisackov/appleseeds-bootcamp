console.log('Client side javascript file is loaded!');

const drinkForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

const COCKTAIL_API_URL =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const getDrinkDescription = (drinks) => {
    if (drinks) {
        const drink = drinks[0];
        const drinkName = drink.strDrink;
        const drinkCategory = drink.strCategory;
        const drinkAlcoholic = drink.strAlcoholic;
        const drinkGlass = drink.strGlass;
        const drinkIngredients = [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
        ].join(', ');
        return `
 ${drinkName} is an ${drinkAlcoholic} ${drinkCategory}.
 It is served in an ${drinkGlass}.
 It is made with ${drinkIngredients}\n\n`;
    } else {
        return 'No drinks found!';
    }
};

drinkForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const cocktail = search.value;
    const URL = `${COCKTAIL_API_URL}${encodeURIComponent(cocktail)}`;

    fetch(URL).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = getDrinkDescription(data.drinks);
                messageTwo.style.height = '640px';
                messageTwo.style.backgroundImage = `url(${data.drinks[0].strDrinkThumb})`;
            }
        });
    });
});
