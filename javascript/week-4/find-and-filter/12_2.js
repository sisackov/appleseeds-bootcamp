const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}


/**
 * @returns the candy element with the specified id.
 */
function getCandy(candyStore, id) {
    return candyStore.candies.find(candy => candy.id === id);
}
console.log(getCandy(candyStore, "5hd7y"));

/**
 * @returns {number} the price of the candy with the specified id.
 */
function getPrice(candyStore, id) {
    return candyStore.candies.find(candy => candy.id === id).price;
}
console.log(getPrice(candyStore, "as12f"));


function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({
        name, id, price,
        amount: 1
    });
}
addCandy(candyStore, '8y7fs', 'snickers', 6);
console.log(candyStore);


/**
 * add the candy price to the cashRegister, 
 * and decrease the amount property of the relevant candy.
 */
function buy(candyStore, id) {
    let candy = candyStore.candies.find(candy => candy.id === id);
    if (candy.amount > 0) {
        candyStore.cashRegister += candy.price;
        candy.amount--;
    } else {
        console.log(`We are out of ${candy.name}`);
    }
}
buy(candyStore, '5hd7y');
console.log(candyStore);

