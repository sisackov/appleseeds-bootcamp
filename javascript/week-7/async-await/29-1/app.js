/**
 * @returns {Promise<Number[]>} an array of food recipe Ids
 */
const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });

/**
 * @param {Number} id
 * @returns {Promise<Object>} a food recipe object
 * @throws {Error} if id is not a number
 * @throws {Error} if id is not found  TODO
 */
const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: 'Fresh tomato pasta',
                    publisher: 'Pinchas Hodadad',
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};

// getIDs()
//     .then((IDs) => {
//         console.log(IDs);
//         return getRecipe(IDs[2]);
//     })
//     .then((recipe) => {
//         console.log(recipe);
//     })
//     .catch((error) => {
//         console.log('It is an error!');
//     });

async function getRecipeAsync(index) {
    try {
        const IDs = await getIDs();
        const recipe = await getRecipe(IDs[index]);
        console.log(recipe);
    } catch (error) {
        console.log('It is an error!', error);
    }
}

getRecipeAsync(1);
