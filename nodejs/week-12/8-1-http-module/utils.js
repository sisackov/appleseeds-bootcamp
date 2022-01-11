const COCKTAIL_API_URL =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const getURL = (argv) => {
    const cocktail = argv.slice(2).join(' ');
    return `${COCKTAIL_API_URL}${encodeURIComponent(cocktail)}`;
};

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
 It is served in ${'AEIOU'.includes(drinkGlass[0]) ? 'an' : 'a'} ${drinkGlass}.
 It is made with ${drinkIngredients}\n\n`;
    } else {
        return 'No drinks found!';
    }
};

export { getDrinkDescription, getURL };
