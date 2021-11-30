const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];




function getNames(arr) {
    return arr.map((person) => person.name);
}
console.log(getNames(data));



function getBornBeforeNineties(arr) {
    let res = [];
    arr.forEach(person => {
        let year = parseInt(person.birthday.slice(-4));
        if (year < 1990) {
            res.push(person);
        }
    });
    return res;
}
console.log(getBornBeforeNineties(data));


function getFoodCount(arr) {
    let foodCounter = {};
    arr.forEach((person) => {
        [...person.favoriteFoods.meats, ...person.favoriteFoods.fish].forEach((food) => {
            // foodCounter[food] = foodCounter[food] ? foodCounter[food] + 1 : 1;
            foodCounter[food] = foodCounter[food] + 1 || 1;// short circuit that does the same as above
        });
    });
    return foodCounter;
}
console.log(getFoodCount(data));